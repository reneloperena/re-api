import { UserRole } from "../graphql/types";
import { GraphQLError } from "graphql";
import { Context } from "../server";

const roleRank: Record<UserRole, number> = {
  [UserRole.Anonymous]: 0,
  [UserRole.Viewer]: 1,
  [UserRole.Editor]: 2,
  [UserRole.Admin]: 3,
  [UserRole.Owner]: 4,
};

export function checkPermissions(
  context: Context,
  required: UserRole,
  action?: string
): void {
  const userRank = roleRank[context.role];
  const requiredRank = roleRank[required];
  if (context.role === UserRole.Anonymous) {
    throw new GraphQLError(`Must be logged in.`, {
      extensions: {
        code: "FORBIDDEN",
      },
    });
  }

  if (userRank < requiredRank) {
    throw new GraphQLError(
      `You must have ${required} permissions${action ? ` to perform ${action}` : ""}.`,
      {
        extensions: {
          code: "FORBIDDEN",
        },
      }
    );
  }
}
