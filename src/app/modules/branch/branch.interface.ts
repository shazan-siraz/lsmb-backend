import { Types } from "mongoose";

export type Branch = {
  user: Types.ObjectId;
  branchName: string;
  branchEmail: string;
  branchMobile: string;
  branchAddress: string;
  companyEmail: string;
  company: Types.ObjectId;
  status: "Enable" | "Disable"
  isDeleted: boolean;
};
