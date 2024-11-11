import { model, Schema } from "mongoose";
import { Group } from "./group.interface";

const groupSchema = new Schema<Group>(
  {
    groupCode: { type: Number, required: true },
    groupTitle: { type: String, required: true },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    branch: { type: Schema.Types.ObjectId, required: true, ref: "Branch" },
  },
  { timestamps: true }
);

export const GroupModel = model<Group>("Group", groupSchema);
