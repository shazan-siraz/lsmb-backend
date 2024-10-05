import { Types } from "mongoose";

export type Branch = {
  branchId: string;
  user: Types.ObjectId;
  branchName: string;
  branchEmail: string;
  branchMobile: string;
  branchAddress: string;
  registeredPackage: Types.ObjectId;
  isDeleted: boolean;
};
