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

  const addedSavingAmount =
    membership.accountBalance + Number(payload.savingsAmount);

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

const getAllSavingTransactionFromDB = async (email: string) => {
  const result = await SavingTransactionModel.find({
    branchEmail: { $eq: email },
  }).populate("memberId");
  return result;
};

const getTotalSavingTransactionAmountFromDB = async (email: string) => {
  const result = await SavingTransactionModel.aggregate([
    { $match: { branchEmail: email } },
    { $group: { _id: null, totalAmount: { $sum: "$savingsAmount" } } },
  ]);
  return result[0]?.totalAmount || 0;
};

const todaySavingTransactionFromDB = async (email: string) => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // আজকের শুরু
  const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // আজকের শেষ

  const result = await SavingTransactionModel.find({
    branchEmail: { $eq: email },
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  })
    .sort({ createdAt: -1 }) // Descending order
    .populate("memberId");

  return result;
};

export const SavingTransactionServices = {
  createSavingTransactionIntoDB,
  getAllSavingTransactionFromDB,
  getTotalSavingTransactionAmountFromDB,
  todaySavingTransactionFromDB,
};
