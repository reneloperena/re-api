import { PrismaClient, Prisma } from "./prisma";
import { createScopedClientMiddleware } from "./middleware/scopedClient";

export const createApartmentRepository = (clientId: string) => {
  const prisma = new PrismaClient();
  prisma.$use(createScopedClientMiddleware(clientId));

  return {
    async findAll(filters: Prisma.ApartmentWhereInput = {}) {
      return prisma.apartment.findMany({ where: filters });
    },

    async findById(id: string) {
      return prisma.apartment.findFirst({ where: { id } });
    },

    async create(
      data: Prisma.ApartmentCreateInput & { userId: string; message?: string }
    ) {
      const apartment = await prisma.apartment.create({ data });

      await prisma.apartmentVersion.create({
        data: {
          apartmentId: apartment.id,
          userId: data.userId,
          version: 1,
          data: apartment as any,
          clientId,
          ...(data.message && { message: data.message }),
        },
      });

      return apartment;
    },

    async update(
      id: string,
      data: Prisma.ApartmentUpdateInput & { userId: string; message?: string }
    ) {
      const current = await prisma.apartment.findFirst({ where: { id } });
      if (!current) throw new Error("Apartment not found");

      const versionCount = await prisma.apartmentVersion.count({
        where: { apartmentId: id },
      });

      const tx = await prisma.$transaction([
        prisma.apartment.update({
          where: { id },
          data,
        }),
        prisma.apartmentVersion.create({
          data: {
            apartmentId: id,
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
      const current = await prisma.apartment.findFirst({ where: { id } });
      if (!current) throw new Error("Apartment not found");

      const versionCount = await prisma.apartmentVersion.count({
        where: { apartmentId: id },
      });

      const tx = await prisma.$transaction([
        prisma.apartment.update({
          where: { id },
          data: { deletedAt: new Date() },
        }),
        prisma.apartmentVersion.create({
          data: {
            apartmentId: id,
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
