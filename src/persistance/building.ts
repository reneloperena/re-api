import { PrismaClient, Prisma } from "@prisma/client";
import { createScopedClientMiddleware } from "./middleware/scopedClient";

export const createBuildingRepository = (clientId: string) => {
  const prisma = new PrismaClient();
  prisma.$use(createScopedClientMiddleware(clientId));

  return {
    async findAll(filters: Prisma.BuildingWhereInput = {}) {
      return prisma.building.findMany({ where: filters });
    },

    async findById(id: string) {
      return prisma.building.findFirst({ where: { id } });
    },

    async create(
      data: Prisma.BuildingCreateInput & { userId: string; message?: string }
    ) {
      const building = await prisma.building.create({ data });

      await prisma.buildingVersion.create({
        data: {
          buildingId: building.id,
          userId: data.userId,
          version: 1,
          data: building as any,
          clientId,
          ...(data.message && { message: data.message }),
        },
      });

      return building;
    },

    async update(
      id: string,
      data: Prisma.BuildingUpdateInput & { userId: string; message?: string }
    ) {
      const current = await prisma.building.findFirst({ where: { id } });
      if (!current) throw new Error("Building not found");

      const versionCount = await prisma.buildingVersion.count({
        where: { buildingId: id },
      });

      const tx = await prisma.$transaction([
        prisma.building.update({
          where: { id },
          data,
        }),
        prisma.buildingVersion.create({
          data: {
            buildingId: id,
            userId: data.userId,
            version: versionCount + 1,
            data: current as any,
            clientId,
            ...(data.message && { message: data.message }),
          },
        }),
      ]);

      return tx[0];
    },

    async softDelete(id: string, userId: string, message?: string) {
      const current = await prisma.building.findFirst({ where: { id } });
      if (!current) throw new Error("Building not found");

      const versionCount = await prisma.buildingVersion.count({
        where: { buildingId: id },
      });

      const tx = await prisma.$transaction([
        prisma.building.update({
          where: { id },
          data: { deletedAt: new Date() },
        }),
        prisma.buildingVersion.create({
          data: {
            buildingId: id,
            userId,
            version: versionCount + 1,
            data: current as any,
            clientId,
            ...(message && { message }),
          },
        }),
      ]);

      return tx[0];
    },
  };
};
