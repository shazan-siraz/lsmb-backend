import { Types } from "mongoose";

export type Dps = {
  memberOfApplying: Types.ObjectId;
  dpsStart: string;
  dpsAcNo: string;
  startingBalance: number;
  durationOfYear: string;
  installmentType: string;
  returnInterest: string;
  returnAmount?: number;
  referenceUser?: Types.ObjectId;
  referenceMember?: Types.ObjectId;
};
