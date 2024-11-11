import { Types } from "mongoose";

export type Group = {
  groupCode: number;
  groupTitle: string;
  branchEmail: string;
  companyEmail: string;
  branch: Types.ObjectId;
};
