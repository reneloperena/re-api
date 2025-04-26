import { GraphQLError } from "graphql";

export function createNotFoundError(): GraphQLError {
  return new GraphQLError(`404 - Not found`, {
    extensions: {
      code: "NOT_FOUND",
    },
  });
}

export function createNotImplemented(): GraphQLError {
  return new GraphQLError(`Functionality has not been implemented yet`, {
    extensions: {
      code: "NOT_IMPLEMENTED",
    },
  });
}
