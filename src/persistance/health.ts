import { HealthCheckResult } from "@vuhio/core/dist/health";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function isDatabaseConnected(): Promise<HealthCheckResult> {
  const timestamp = new Date().toISOString();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return {
      status: "ok",
      timestamp,
    };
  } catch {
    return {
      status: "unhealthy",
      timestamp,
      reason: "Database not available",
    };
  }
}
