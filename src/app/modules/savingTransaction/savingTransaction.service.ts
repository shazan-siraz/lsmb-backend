import mongoose from "mongoose";
import { SavingTransaction } from "./savingTransaction.interface";
import { SavingTransactionModel } from "./savingTransaction.model";
import MembershipModel from "../membership/membership.model";
import AppError from "../../errors/AppError";

const createSavingTransactionIntoDB = async (payload: SavingTransaction) => {
  // find membership
  const membership = await MembershipModel.findById(payload.memberId);

  if (!membership) {
    throw new AppError(404, "Membership not found!");
  }

  const addedSavingAmount = membership.accountBalance + payload.savingAmount;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // updated membership account Banalce
    const savingAmount = await MembershipModel.findByIdAndUpdate(
      payload.memberId,
      { $set: { accountBalance: addedSavingAmount } },
      { new: true, session } // Ensure session is passed here
    );

    if (!savingAmount) {
      throw new AppError(404, "not found");
    }

    // created saving transaction history
    const newSavingTransaction = await SavingTransactionModel.create(
      [payload],
      { session }
    );

    await session.commitTransaction();

    return newSavingTransaction;
  } catch (err: any) {
    await session.abortTransaction();
    throw Error(err);
  } finally {
    session.endSession();
  }
};

const getAllSavingTransactionFromDB = async () => {
  const result = await SavingTransactionModel.find();
  return result;
};

export const SavingTransactionServices = {
  createSavingTransactionIntoDB,
  getAllSavingTransactionFromDB,
};
