import { model, Schema } from "mongoose";
import { Branch } from "./branch.interface";

const BranchSchema = new Schema<Branch>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    branchName: { type: String, required: true },
    branchEmail: { type: String, required: true },
    branchMobile: { type: String, required: true },
    branchAddress: { type: String, required: true },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    status: {
      type: String,
      enum: ["Enable", "Disable"],
      required: true,
      default: "Enable",
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const BranchModel = model<Branch>("Branch", BranchSchema);
