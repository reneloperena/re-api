import type { Context } from '@vuhio/core'
import type { Resolvers } from './types'
import { getMe, requestLogin, verifyLogin } from '../business-logic/auth'

const resolvers: Resolvers<Context> = {
  Query: {
    me: (_parent, _args, context, _info) => getMe(context),
  },
  Mutation: {
    requestLogin: (_parent, args, context, _info) =>
      requestLogin(args.phoneNumber, context),
    verifyLogin: (_parent, args, context, _info) =>
      verifyLogin(args.phoneNumber, args.otp, context),
  },
}

export default resolvers
