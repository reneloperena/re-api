import type { Context } from "../server";
import {
  UserRole,
  type PaymentPlan,
  type PaymentPlanInput,
} from "../graphql/types";
import { checkPermissions } from "./authorization";

export async function getPaymentPlan(
  _id: string,
  context: Context
): Promise<PaymentPlan | null> {
  checkPermissions(context, UserRole.Admin);
  return null;
}

export async function createPaymentPlan(
  _input: PaymentPlanInput,
  context: Context
): Promise<PaymentPlan> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}

export async function updatePaymentPlan(
  _id: string,
  _input: PaymentPlanInput,
  context: Context
): Promise<PaymentPlan> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}

export async function deletePaymentPlan(
  _id: string,
  context: Context
): Promise<PaymentPlan> {
  checkPermissions(context, UserRole.Admin);
  throw new Error("not implemented yet!");
}
