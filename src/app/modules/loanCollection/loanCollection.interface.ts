import { Types } from "mongoose";

export type LoanCollection = {
  loanId: Types.ObjectId;
  loanNo: string;
  memberId: Types.ObjectId;
  transactionId: string;
  branchEmail: string;
  companyEmail: string;
  date: string;
  installmentAmount: number;
  penaltyAmount?: number;
  transactionNote?: string;
  isDeleted: boolean;
};
