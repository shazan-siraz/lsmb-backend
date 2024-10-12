import { model, Schema } from "mongoose";
import { Dps } from "./dps.interface";

const DpsSchema = new Schema<Dps>({
  memberOfApplying: {
    type: Schema.Types.ObjectId,
    ref: "Membership",
    required: true,
  },
  branchEmail: { type: String, required: true },
  dpsStart: { type: String, required: true },
  dpsAcNo: { type: String, required: true },
  startingBalance: { type: Number, required: true },
  durationOfYear: { type: String, required: true },
  installmentType: { type: String, required: true },
  returnInterest: { type: String, required: true },
  returnAmount: { type: Number, required: true },
  referenceUser: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  referenceMember: {
    type: Schema.Types.ObjectId,
    ref: "Membership",
  },
});

export const DpsModel = model<Dps>("Dps", DpsSchema);
