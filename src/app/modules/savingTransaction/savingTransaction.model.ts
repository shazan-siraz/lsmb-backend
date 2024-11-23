import { model, Schema } from "mongoose";
import { SavingTransaction } from "./savingTransaction.interface";

const SavingTransactionSchema = new Schema<SavingTransaction>(
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    memberEmail: { type: String, required: true },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    dateOfCollection: { type: String, required: true },
    savingsAmount: { type: Number, required: true },
    transactionId: { type: String, required: true },
    transactionNote: { type: String },
  },
  { timestamps: true }
);

export const SavingTransactionModel = model(
  "SavingTransaction",
  SavingTransactionSchema
);
