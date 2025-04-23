import type { Context } from "@vuhio/core";
import type { PaymentPlan, PaymentPlanInput } from "../graphql/types";

export async function getPaymentPlan(
  _id: string,
  _context: Context
): Promise<PaymentPlan | null> {
  return null;
}

export async function createPaymentPlan(
  _input: PaymentPlanInput,
  _context: Context
): Promise<PaymentPlan> {
  throw new Error("not implemented yet!");
}

export async function updatePaymentPlan(
  _id: string,
  _input: PaymentPlanInput,
  _context: Context
): Promise<PaymentPlan> {
  throw new Error("not implemented yet!");
}

export async function deletePaymentPlan(
  _id: string,
  _context: Context
): Promise<PaymentPlan> {
  throw new Error("not implemented yet!");
}
