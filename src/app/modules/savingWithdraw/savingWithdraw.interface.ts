import { Types } from "mongoose";

export type SavingWithdraw = {
  memberId: Types.ObjectId;
  branchEmail: string;
  companyEmail: string;
  dateOfWithdraw: string;
  mrSlipNo: string;
  withdrawAmount: number;
  serviceCharge: number;
  totalPayableAmount: number;
  withdrawTransactionInfo: string;
  status: "Active" | "Pending" | "Block";
};
