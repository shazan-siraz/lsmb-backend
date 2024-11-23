import { Types } from "mongoose";

export type LoanCollection = {
  loanId: Types.ObjectId;
  memberId: Types.ObjectId;
  memberEmail: string;
  branchEmail: string;
  companyEmail: string;
  date: string;
  installmentAmount: number;
  penaltyAmount?: number;
  transactionNote?: string;
};
