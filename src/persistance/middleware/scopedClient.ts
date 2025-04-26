import { Prisma } from "@prisma/client";

const MODELS_WITH_CLIENT_AND_DELETION = new Set([
  "Building",
  "Model",
  "Apartment",
  "PaymentPlan",
  "PaymentMilestone",
]);

const MODELS_WITH_CLIENT_ONLY = new Set([
  "ApartmentVersion",
  "BuildingVersion",
  "ModelVersion",
  "PaymentPlanVersion",
]);

export const createScopedClientMiddleware = (
  clientId: string
): Prisma.Middleware => {
  return async (params, next) => {
    const { model, action, args } = params;

    // Applies to both soft-deleted and client-scoped models
    if (
      model &&
      (MODELS_WITH_CLIENT_AND_DELETION.has(model) ||
        MODELS_WITH_CLIENT_ONLY.has(model))
    ) {
      const filters: any[] = [{ clientId }];
      if (MODELS_WITH_CLIENT_AND_DELETION.has(model)) {
        filters.push({ deletedAt: null });
      }

      if (["findMany", "findFirst", "findUnique"].includes(action)) {
        params.args.where = {
          AND: [...filters, ...(args?.where ? [args.where] : [])],
        };
      }

      if (action === "create") {
        params.args.data = {
          ...args.data,
          clientId,
        };
      }

      if (action === "update") {
        params.args.where = {
          AND: [...filters, ...(args?.where ? [args.where] : [])],
        };
      }

      if (action === "delete" && MODELS_WITH_CLIENT_AND_DELETION.has(model)) {
        params.action = "update";
        params.args.data = {
          ...args.data,
          deletedAt: new Date(),
        };
        params.args.where = {
          AND: [...filters, ...(args?.where ? [args.where] : [])],
        };
      }
    }

    return next(params);
  };
};
