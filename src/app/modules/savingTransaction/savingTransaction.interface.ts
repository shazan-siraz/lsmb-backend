import { Types } from "mongoose";

export type SavingTransaction = {
  memberId: Types.ObjectId;
  memberEmail: string;
  branchEmail: string;
  companyEmail: string;
  dateOfCollection: string;
  savingsAmount: number;
  transactionId: string;
  transactionNote?: string;
  isDeleted: boolean;
};
