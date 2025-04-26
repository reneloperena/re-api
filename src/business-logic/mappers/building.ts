import {
  Building as GQLBuilding,
  BuildingInput as GQLBuildingInput,
} from "../../graphql/types";
import { Building as PrismaBuilding, Prisma } from "@prisma/client";

export function mapBuilding(building: PrismaBuilding): GQLBuilding {
  return {
    id: building.id,
    name: building.name,
    createdAt: building.createdAt,
    address: null,
    apartments: {} as any,
    models: {} as any,
    __typename: "Building",
  };
}

export function mapBuildingCreateInput(
  building: GQLBuildingInput,
  context: { userId: string; clientId: string }
): Prisma.BuildingCreateInput & { userId: string; message?: string } {
  return {
    name: building.name,
    client: {
      connect: {
        id: context.clientId,
      },
    },
    message: "Create",
    userId: context.userId,
  };
}
