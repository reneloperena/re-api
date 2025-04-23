import type { Context } from "@vuhio/core";
import type { Apartment, ApartmentInput } from "../graphql/types";

export async function getApartment(
  _id: string,
  _context: Context
): Promise<Apartment | null> {
  return null;
}

export async function createAparment(
  _input: Apartment,
  _context: Context
): Promise<Apartment> {
  throw new Error("not implemented yet!");
}

export async function updateApartment(
  _id: string,
  _input: ApartmentInput,
  _context: Context
): Promise<Apartment> {
  throw new Error("not implemented yet!");
}

export async function deleteApartment(
  _id: string,
  _context: Context
): Promise<Apartment> {
  throw new Error("not implemented yet!");
}
