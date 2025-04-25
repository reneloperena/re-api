import { dirname, join } from "node:path";
import startSubgraph from "@vuhio/core";
import config from "./config";
import resolvers from "./graphql/resolvers";
import { isDatabaseConnected } from "./persistance/health";
import { FastifyRequest } from "fastify";
import { authenticateToken } from "./business-logic/authentication";
import { UserRole } from "./graphql/types";

const schemaPath = join(dirname(import.meta.dirname), "schema.graphql");
type AuthenticatedContext = {
  userId: string;
  clientId: string;
  role: UserRole;
};

type UnauthenticatedContext = {
  userId: "";
  clientId: "";
  role: UserRole.Anonymous;
};

export type Context = AuthenticatedContext | UnauthenticatedContext;

export async function authContext(request: FastifyRequest): Promise<Context> {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      userId: "",
      clientId: "",
      role: UserRole.Anonymous,
    };
  }

  const token = authHeader.split(" ")[1];

  try {
    return (await authenticateToken(token)) as Context;
  } catch (err) {
    return {
      userId: "",
      clientId: "",
      role: UserRole.Anonymous,
    };
  }
}

startSubgraph<Context>({
  typeDefs: schemaPath,
  resolvers,
  options: {
    port: config.get("port"),
  },
  healthChecks: [isDatabaseConnected],
  context: authContext,
});
