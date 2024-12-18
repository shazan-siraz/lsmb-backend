import { model, Schema } from "mongoose";
import { DpsCollection } from "./dpsCollection.interface";

const DpsCollectionSchema = new Schema<DpsCollection>(
  {
    memberOfApplying: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    dpsId: {
      type: Schema.Types.ObjectId,
      ref: "Dps",
      required: true,
    },
    transactionId: { type: String, required: true },
    dateOfCollection: { type: String, required: true },
    dpsAcNo: { type: String, required: true },
    dpsCollectionAmount: { type: Number, required: true },
    penaltyAmount: { type: Number },
    transactionNote: { type: String },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const DpsCollectionModel = model<DpsCollection>(
  "DpsCollection",
  DpsCollectionSchema
);
