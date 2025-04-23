import { PrismaClient, Prisma } from "./prisma";
import { createScopedClientMiddleware } from "./middleware/scopedClient";

export const createModelRepository = (clientId: string) => {
  const prisma = new PrismaClient();
  prisma.$use(createScopedClientMiddleware(clientId));

  return {
    async findAll(filters: Prisma.ModelWhereInput = {}) {
      return prisma.model.findMany({ where: filters });
    },

    async findById(id: string) {
      return prisma.model.findFirst({ where: { id } });
    },

    async create(
      data: Prisma.ModelCreateInput & { userId: string; message?: string }
    ) {
      const model = await prisma.model.create({ data });

      await prisma.modelVersion.create({
        data: {
          modelId: model.id,
          userId: data.userId,
          version: 1,
          data: model as any,
          clientId,
          ...(data.message && { message: data.message }),
        },
      });

      return model;
    },

    async update(
      id: string,
      data: Prisma.ModelUpdateInput & { userId: string; message?: string }
    ) {
      const current = await prisma.model.findFirst({ where: { id } });
      if (!current) throw new Error("Model not found");

      const versionCount = await prisma.modelVersion.count({
        where: { modelId: id },
      });

      const tx = await prisma.$transaction([
        prisma.model.update({
          where: { id },
          data,
        }),
        prisma.modelVersion.create({
          data: {
            modelId: id,
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
      const current = await prisma.model.findFirst({ where: { id } });
      if (!current) throw new Error("Model not found");

      const versionCount = await prisma.modelVersion.count({
        where: { modelId: id },
      });

      const tx = await prisma.$transaction([
        prisma.model.update({
          where: { id },
          data: { deletedAt: new Date() },
        }),
        prisma.modelVersion.create({
          data: {
            modelId: id,
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
