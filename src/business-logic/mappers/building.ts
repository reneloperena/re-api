import {
  Building as GQLBuilding,
  BuildingInput as GQLBuildingInput,
} from "../../graphql/types";
import { Building as PrismaBuilding, Prisma } from "../../persistance/prisma";
export type BuildingDTO = Pick<
  GQLBuilding,
  "id" | "name" | "createdAt" | "address"
>;

export function mapBuilding(building: PrismaBuilding): BuildingDTO {
  return {
    id: building.id,
    name: building.name,
    createdAt: building.createdAt,
    address: null,
  };
}

export function mapBuildingCreateInput(
  building: GQLBuildingInput,
  message: string,
  context: { userId: string; clientId: string }
): Prisma.BuildingCreateInput & { userId: string; message?: string } {
  return {
    name: building.name,
    client: {
      connect: {
        id: context.clientId,
      },
    },
    message,
    userId: context.userId,
  };
}

export function mapBuildingUpdateInput(
  building: GQLBuildingInput,
  context: { userId: string; clientId: string }
): Prisma.BuildingUpdateInput & { userId: string; message?: string } {
  return {};
}
