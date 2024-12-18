import { model, Schema } from "mongoose";
import { LoanCollection } from "./loanCollection.interface";

const LoanCollectionSchema = new Schema<LoanCollection>(
  {
    loanId: {
      type: Schema.Types.ObjectId,
      ref: "Loan",
      required: true,
    },
    loanNo: { type: String, required: true },
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    transactionId: { type: String, required: true },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    date: { type: String, required: true },
    installmentAmount: { type: Number, required: true },
    penaltyAmount: { type: Number },
    transactionNote: { type: String },
    isDeleted: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

export const LoanCollectionModel = model(
  "LoanCollection",
  LoanCollectionSchema
);
