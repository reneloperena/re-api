import { PrismaClient, Prisma } from "./prisma";
import { createScopedClientMiddleware } from "./middleware/scopedClient";

export const createPaymentPlanRepository = (clientId: string) => {
  const prisma = new PrismaClient();
  prisma.$use(createScopedClientMiddleware(clientId));

  return {
    async findAll(filters: Prisma.PaymentPlanWhereInput = {}) {
      return prisma.paymentPlan.findMany({ where: filters });
    },

    async findById(id: string) {
      return prisma.paymentPlan.findFirst({ where: { id } });
    },

    async create(
      data: Prisma.PaymentPlanCreateInput & { userId: string; message?: string }
    ) {
      const paymentPlan = await prisma.paymentPlan.create({ data });

      await prisma.paymentPlanVersion.create({
        data: {
          paymentPlanId: paymentPlan.id,
          userId: data.userId,
          version: 1,
          data: paymentPlan as any,
          clientId,
          ...(data.message && { message: data.message }),
        },
      });

      return paymentPlan;
    },

    async update(
      id: string,
      data: Prisma.PaymentPlanUpdateInput & { userId: string; message?: string }
    ) {
      const current = await prisma.paymentPlan.findFirst({ where: { id } });
      if (!current) throw new Error("PaymentPlan not found");

      const versionCount = await prisma.paymentPlanVersion.count({
        where: { paymentPlanId: id },
      });

      const tx = await prisma.$transaction([
        prisma.paymentPlan.update({
          where: { id },
          data,
        }),
        prisma.paymentPlanVersion.create({
          data: {
            paymentPlanId: id,
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
      const current = await prisma.paymentPlan.findFirst({ where: { id } });
      if (!current) throw new Error("PaymentPlan not found");

      const versionCount = await prisma.paymentPlanVersion.count({
        where: { paymentPlanId: id },
      });

      const tx = await prisma.$transaction([
        prisma.paymentPlan.update({
          where: { id },
          data: { deletedAt: new Date() },
        }),
        prisma.paymentPlanVersion.create({
          data: {
            paymentPlanId: id,
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
