import {
  UserRole,
  type Apartment,
  type ApartmentConnection,
  type ApartmentInput,
  type PaginationFilter,
} from "../graphql/types";
import { Context } from "../server";
import { checkPermissions } from "./authorization";

export async function getApartment(
  _id: string,
  context: Context
): Promise<Apartment | null> {
  checkPermissions(context, UserRole.Viewer);
  return null;
}

export async function findApartments(
  _pagination: PaginationFilter,
  context: Context
): Promise<ApartmentConnection> {
  checkPermissions(context, UserRole.Viewer);
  throw new Error("not implemented yet!");
}

export async function createAparment(
  _buildingId: string,
  _input: ApartmentInput,
  context: Context
): Promise<Apartment> {
  checkPermissions(context, UserRole.Editor);
  throw new Error("not implemented yet!");
}

export async function updateApartment(
  _id: string,
  _input: ApartmentInput,
  context: Context
): Promise<Apartment> {
  checkPermissions(context, UserRole.Editor);
  throw new Error("not implemented yet!");
}

export async function deleteApartment(
  _id: string,
  context: Context
): Promise<Apartment> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}
