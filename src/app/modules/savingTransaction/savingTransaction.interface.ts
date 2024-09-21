import { Types } from "mongoose";

export type SavingTransaction = {
  memberId: Types.ObjectId;
  dateOfCollection: string;
  savingAmount: number;
  savingTransactionInfo?: string;
};
