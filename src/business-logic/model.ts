import type { Context } from "../server";
import {
  UserRole,
  type Model,
  type ModelConnection,
  type ModelInput,
  type PaginationFilter,
} from "../graphql/types";
import { checkPermissions } from "./authorization";

export async function getModel(
  _id: string,
  context: Context
): Promise<Model | null> {
  checkPermissions(context, UserRole.Viewer);
  return null;
}

export async function findModel(
  _pagination: PaginationFilter,
  context: Context
): Promise<ModelConnection> {
  checkPermissions(context, UserRole.Viewer);
  throw new Error("not implemented yet!");
}

export async function createModel(
  _buildingId: string,
  _input: ModelInput,
  context: Context
): Promise<Model> {
  checkPermissions(context, UserRole.Editor);
  throw new Error("not implemented yet!");
}

export async function updateModel(
  _id: string,
  _input: ModelInput,
  context: Context
): Promise<Model> {
  checkPermissions(context, UserRole.Editor);
  throw new Error("not implemented yet!");
}

export async function deleteModel(
  _id: string,
  context: Context
): Promise<Model> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}
