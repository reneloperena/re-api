import type { Context } from "../server";
import type { Resolvers } from "./types";
import {
  getMe,
  requestLogin,
  verifyLogin,
} from "../business-logic/authentication";
import { createBuilding, updateBuilding } from "../business-logic/building";
import { createAparment, updateApartment } from "../business-logic/apartment";
import { createModel, updateModel } from "../business-logic/model";

const resolvers: Resolvers<Context> = {
  Query: {
    me: (_parent, _args, context, _info) => getMe(context),
  },
  Mutation: {
    requestLogin: (_parent, args, context, _info) =>
      requestLogin(args.phoneNumber, context),
    verifyLogin: (_parent, args, context, _info) =>
      verifyLogin(args.phoneNumber, args.otp, context),
    createBuilding: (_parent, args, context, _info) =>
      createBuilding(args.input, context),
    updateBuilding: (_parent, args, context, _info) =>
      updateBuilding(args.id, args.input, context),
    createApartment: (_parent, args, context, _info) =>
      createAparment(args.buildingId, args.input, context),
    updateApartment: (_parent, args, context, _info) =>
      updateApartment(args.id, args.input, context),
    createModel: (_parent, args, context, _info) =>
      createModel(args.buildingId, args.input, context),
    updateModel: (_parent, args, context, _info) =>
      updateModel(args.id, args.input, context),
  },
};

export default resolvers;
