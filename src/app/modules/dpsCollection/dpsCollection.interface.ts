import { Types } from "mongoose";

export type DpsCollection = {
  memberOfApplying: Types.ObjectId;
  memberName: string;
  memberPhoneNo: string;
  branchEmail: string;
  companyEmail: string;
  dpsId: Types.ObjectId;
  dateOfCollection: string;
  dpsAcNo: string;
  dpsCollectionAmount: number;
  penaltyAmount?: number;
  transactionNote?: string;
  isDeleted: boolean;
};
