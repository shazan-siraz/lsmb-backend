import { Types } from "mongoose";

export type Dps = {
  memberOfApplying: Types.ObjectId;
  memberName: string;
  memberPhoneNo: string;
  branchEmail: string;
  companyEmail: string;
  dpsStart: string;
  dpsAcNo: string;
  startingBalance: number;
  durationOfYear: number;
  installmentType: string;
  returnInterest: number;
  returnAmount: number;
  referenceEmployee?: Types.ObjectId;
  referenceMember?: Types.ObjectId;
  status: "Active" | "Pending" | "Block";
  isDeleted: boolean;
};
