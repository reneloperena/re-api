import type { Context } from '@vuhio/core'
import type { Building, BuildingInput } from '../graphql/types'

export async function getBuilding(
  _id: string,
  _context: Context,
): Promise<Building | null> {
  return null
}

export async function createBuilding(
  _input: BuildingInput,
  _context: Context,
): Promise<Building> {
  throw new Error('not implemented yet!')
}

export async function updateBuilding(
  _id: string,
  _input: BuildingInput,
  _context: Context,
): Promise<Building> {
  throw new Error('not implemented yet!')
}

export async function deleteBuilding(
  _id: string,
  _context: Context,
): Promise<Building> {
  throw new Error('not implemented yet!')
}
