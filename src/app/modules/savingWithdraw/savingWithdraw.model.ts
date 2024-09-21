import { model, Schema } from "mongoose";
import { SavingWithdraw } from "./savingWithdraw.interface";

const SavingWithdrawSchema = new Schema<SavingWithdraw>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    dateOfWithdraw: { type: String, required: true },
    mrSlipNo: { type: String, required: true },
    withdrawAmount: { type: Number, required: true },
    serviceCharge: { type: Number, required: true },
    totalPayableAmount: { type: Number, required: true },
    withdrawTransactionInfo: { type: String, required: true },
  },
  { timestamps: true }
);

export const SavingWithdrawModel = model(
  "SavingWithdraw",
  SavingWithdrawSchema
);
