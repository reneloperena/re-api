import type { Context } from "@vuhio/core";
import type { Model, ModelInput } from "../graphql/types";

export async function getModel(
  _id: string,
  _context: Context
): Promise<Model | null> {
  return null;
}

export async function createAparment(
  _input: Model,
  _context: Context
): Promise<Model> {
  throw new Error("not implemented yet!");
}

export async function updateModel(
  _id: string,
  _input: ModelInput,
  _context: Context
): Promise<Model> {
  throw new Error("not implemented yet!");
}

export async function deleteModel(
  _id: string,
  _context: Context
): Promise<Model> {
  throw new Error("not implemented yet!");
}
