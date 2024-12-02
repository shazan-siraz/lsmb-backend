import mongoose from "mongoose";
import { SavingWithdraw } from "./savingWithdraw.interface";
import { SavingWithdrawModel } from "./savingWithdraw.model";

const createSavingWithdrawIntoDB = async (payload: SavingWithdraw) => {
  const result = await SavingWithdrawModel.create(payload);
  return result;
};

const getOneMemberAllSavingWithdrawFromDB = async (id: string) => {
  const result = await SavingWithdrawModel.aggregate([
    {
      $match: { memberId: new mongoose.Types.ObjectId(id) },
    },
    {
      $group: {
        _id: null,
        totalSavingWithdrawAmount: { $sum: "$withdrawAmount" },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalSavingWithdrawAmount : 0;
};

const getTotalSavingWithdrawFromDB = async (email: string) => {
  const result = await SavingWithdrawModel.aggregate([
    {
      $match: { branchEmail: email },
    },
    {
      $group: {
        _id: null,
        totalSavingWithdrawAmount: { $sum: "$withdrawAmount" },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalSavingWithdrawAmount : 0;
};

export const SavingWithdrawServices = {
  createSavingWithdrawIntoDB,
  getOneMemberAllSavingWithdrawFromDB,
  getTotalSavingWithdrawFromDB
};
