import type { Context } from '@vuhio/core'
import type { AuthPayload, User } from '../graphql/types'
import logger from '@vuhio/logging'
import admin from 'firebase-admin'
import { GoogleAuth } from 'google-auth-library'
import { UserRole } from '../graphql/types';

(async () => {
  const auth = new GoogleAuth()
  const client = await auth.getClient()
  const projectId = await auth.getProjectId()

  logger.info('✅ Google Cloud Project ID:', projectId)
  logger.info(
    '✅ Using Service Account:',
    (await client.getAccessToken()).token,
  )

  if (!admin.apps?.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    })
  }
  logger.info('✅ Firebase Admin SDK initialized!')
})()

// Hardcoded OTP (Twilio-style 6-digit code)
const OTP_MOCK = '123456'

export async function requestLogin(
  phoneNumber: string,
  _context: Context,
): Promise<boolean> {
  logger.info(`OTP for ${phoneNumber}: ${OTP_MOCK}`)
  return true
}

export async function verifyLogin(
  phoneNumber: string,
  otp: string,
  _context: Context,
): Promise<AuthPayload> {
  if (OTP_MOCK !== otp) {
    throw new Error('Invalid or expired OTP')
  }

  // Fetch or create user in GCIP
  let firebaseUser
  try {
    firebaseUser = await admin.auth().getUserByPhoneNumber(phoneNumber)
  }
  catch {
    // User doesn't exist → Register them
    firebaseUser = await admin.auth().createUser({ phoneNumber })
  }
  logger.debug(firebaseUser)
  // Generate Firebase custom token
  const customToken = await admin.auth().createCustomToken(firebaseUser.uid)

  const user: User = {
    id: firebaseUser.uid,
    phoneNumber: firebaseUser.phoneNumber!,
    role: UserRole.Admin,
    createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
  }

  return {
    token: customToken,
    user,
  }
}

export async function getMe(context: Context): Promise<User> {
  if (!context.userId) {
    throw new Error('Unauthorized')
  }

  // Fetch user details from Firebase Auth
  const firebaseUser = await admin.auth().getUser(context.userId)

  return {
    id: firebaseUser.uid,
    role: UserRole.Admin,
    phoneNumber: firebaseUser.phoneNumber!,
    createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
  }
}
