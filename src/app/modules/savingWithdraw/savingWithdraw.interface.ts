import { Types } from "mongoose";

export type SavingWithdraw = {
  memberId: Types.ObjectId;
  dateOfWithdraw: string;
  mrSlipNo: string;
  withdrawAmount: number;
  serviceCharge: number;
  totalPayableAmount: number;
  withdrawTransactionInfo: string;
};
