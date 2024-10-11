import { model, Schema } from "mongoose";
import { Group } from "./group.interface";

const groupSchema = new Schema<Group>(
  {
    groupCode: { type: Number, required: true },
    groupTitle: { type: String, required: true },
    branchEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const GroupModel = model<Group>("Group", groupSchema);
