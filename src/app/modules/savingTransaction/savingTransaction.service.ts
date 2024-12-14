import mongoose from "mongoose";
import { SavingTransaction } from "./savingTransaction.interface";
import { SavingTransactionModel } from "./savingTransaction.model";
import MembershipModel from "../membership/membership.model";
import AppError from "../../errors/AppError";

const createSavingTransactionIntoDB = async (payload: SavingTransaction) => {
  const result = await SavingTransactionModel.create(payload);
  return result;
};

const getAllSavingTransactionFromDB = async (email: string) => {
  const result = await SavingTransactionModel.find({
    branchEmail: { $eq: email },
  }).populate("memberId");
  return result;
};

const getTotalSavingTransactionAmountFromDB = async (email: string) => {
  const result = await SavingTransactionModel.aggregate([
    { $match: { branchEmail: email, isDeleted: false } },
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
    isDeleted: { $eq: false },
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  })
    .sort({ createdAt: -1 }) // Descending order
    .populate("memberId");

  return result;
};

const updateSavingTransactionFromDB = async (
  id: string,
  payload: {
    savingsAmount: number;
    transactionNote: string;
  }
) => {
  const result = await SavingTransactionModel.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

const deleteSavingTransactionFromDB = async (id: string) => {

  const result = await SavingTransactionModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const SavingTransactionServices = {
  createSavingTransactionIntoDB,
  getAllSavingTransactionFromDB,
  getTotalSavingTransactionAmountFromDB,
  todaySavingTransactionFromDB,
  updateSavingTransactionFromDB,
  deleteSavingTransactionFromDB,
};
