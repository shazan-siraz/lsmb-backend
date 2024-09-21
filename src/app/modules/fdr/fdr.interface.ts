import { Types } from "mongoose";

export type Fdr = {
  memberOfFdrApplying: Types.ObjectId;
  FdrStart: string;
  FdrAcNo: string;
  FixedDepositAmount: number;
  durationOfYear: string;
  revenueType: string;
  returnInterest: number;
  interest: number;
  totalInterest: number;
  referenceEmployee: Types.ObjectId;
  referenceMember: Types.ObjectId;
};
