import { model, Schema } from "mongoose";
import { Dps } from "./dps.interface";

const DpsSchema = new Schema<Dps>(
  {
    memberOfApplying: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    memberName: { type: String, required: true },
    memberPhoneNo: { type: String, required: true },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    dpsStart: { type: String, required: true },
    dpsAcNo: { type: String, required: true },
    startingBalance: { type: Number, required: true },
    durationOfYear: { type: Number, required: true },
    installmentType: { type: String, required: true },
    returnInterest: { type: Number, required: true },
    returnAmount: { type: Number, required: true },
    referenceEmployee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
    referenceMember: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Block"],
      required: true,
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const DpsModel = model<Dps>("Dps", DpsSchema);
