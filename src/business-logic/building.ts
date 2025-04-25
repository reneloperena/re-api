import type { Context } from "../server";
import {
  UserRole,
  type Building,
  type BuildingConnection,
  type BuildingInput,
  type PaginationFilter,
} from "../graphql/types";
import { checkPermissions } from "./authorization";

export async function getBuilding(
  _id: string,
  context: Context
): Promise<Building | null> {
  checkPermissions(context, UserRole.Viewer);
  return null;
}

export async function findBuildings(
  _pagination: PaginationFilter,
  context: Context
): Promise<BuildingConnection> {
  checkPermissions(context, UserRole.Viewer);
  throw new Error("not implemented yet!");
}

export async function createBuilding(
  _input: BuildingInput,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Viewer);
  throw new Error("not implemented yet!");
}

export async function updateBuilding(
  _id: string,
  _input: BuildingInput,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Viewer);
  throw new Error("not implemented yet!");
}

export async function deleteBuilding(
  _id: string,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}
