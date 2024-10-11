import { Types } from "mongoose";

export type SavingTransaction = {
  memberId: Types.ObjectId;
  dateOfCollection: string;
  savingAmount: number;
  savingTransactionInfo?: string;
  branchEmail: string;
  transactionId: string;
  transactionType: string;
};
