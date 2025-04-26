import type { Context } from "../server";
import {
  Apartment,
  ApartmentConnection,
  Model,
  ModelConnection,
  UserRole,
  type Building,
  type BuildingConnection,
  type BuildingInput,
  type PaginationFilter,
} from "../graphql/types";
import { checkPermissions } from "./authorization";
import { mapBuilding, mapBuildingCreateInput } from "./mappers/building";
import { createBuildingRepository } from "../persistance/building";
import { createNotFoundError, createNotImplemented } from "./errors";
import { Maybe } from "graphql/jsutils/Maybe";
import { createConnection } from "./pagination";

export async function getBuilding(
  id: string,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Viewer);
  const repo = createBuildingRepository(context.clientId);
  const dbBuilding = await repo.findById(id);
  if (dbBuilding === null) throw createNotFoundError();
  return mapBuilding(dbBuilding);
}

export async function getBuildingApartments(
  _buildingId: string,
  _pagination: Maybe<PaginationFilter>,
  context: Context
): Promise<ApartmentConnection> {
  checkPermissions(context, UserRole.Viewer);
  // TODO: Implement the actual apartment fetch logic
  const nodes: Apartment[] = [];
  const hasPreviousPage = false;
  const hasNextPage = false;

  return createConnection(
    nodes,
    hasNextPage,
    hasPreviousPage
  ) as ApartmentConnection;
}

export async function getBuildingModels(
  _buildingId: string,
  _pagination: Maybe<PaginationFilter>,
  context: Context
): Promise<ModelConnection> {
  checkPermissions(context, UserRole.Viewer);
  // TODO: Implement the actual model fetch logic
  const nodes: Model[] = [];
  const hasPreviousPage = false;
  const hasNextPage = false;

  return createConnection(
    nodes,
    hasNextPage,
    hasPreviousPage
  ) as ModelConnection;
}

export async function findBuildings(
  _pagination: Maybe<PaginationFilter>,
  context: Context
): Promise<BuildingConnection> {
  const repo = createBuildingRepository(context.clientId);
  const dbBuildings = await repo.findAll();
  checkPermissions(context, UserRole.Viewer);

  const nodes = dbBuildings.map(mapBuilding);
  const hasPreviousPage = false;
  const hasNextPage = false;
  return createConnection<Building>(
    nodes,
    hasPreviousPage,
    hasNextPage
  ) as BuildingConnection;
}

export async function createBuilding(
  input: BuildingInput,
  context: Context
): Promise<Building> {
  const repo = createBuildingRepository(context.clientId);
  checkPermissions(context, UserRole.Editor);
  const createInput = mapBuildingCreateInput(input, context);

  const dbBuilding = await repo.create(createInput);

  return mapBuilding(dbBuilding);
}

export async function updateBuilding(
  _id: string,
  _input: BuildingInput,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Viewer);
  throw createNotImplemented();
}

export async function deleteBuilding(
  _id: string,
  context: Context
): Promise<Building> {
  checkPermissions(context, UserRole.Admin);
  throw createNotImplemented();
}
