import { model, Schema } from "mongoose";
import { Fdr } from "./fdr.interface";

const FdrSchema = new Schema<Fdr>(
  {
    memberOfFdrApplying: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    FdrStart: { type: String, required: true },
    FdrAcNo: { type: String, required: true },
    FixedDepositAmount: { type: Number, required: true },
    durationOfYear: { type: String, required: true },
    revenueType: { type: String, required: true },
    returnInterest: { type: Number, required: true },
    interest: { type: Number, required: true },
    totalInterest: { type: Number, required: true },
    referenceEmployee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    referenceMember: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
  },
  { timestamps: true }
);

export const FdrModel = model<Fdr>("Fdr", FdrSchema);
