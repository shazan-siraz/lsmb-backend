import mongoose from "mongoose";
import MembershipModel from "../membership/membership.model";
import AppError from "../../errors/AppError";
import { SavingWithdraw } from "./savingWithdraw.interface";
import { SavingWithdrawModel } from "./savingWithdraw.model";

const createSavingWithdrawIntoDB = async (payload: SavingWithdraw) => {
  // find membership
  const membership = await MembershipModel.findById(payload.memberId);

  if (!membership) {
    throw new AppError(404, "Membership not found!");
  }

  const subtractTotalFromSavingAmount = Number(payload.withdrawAmount) + Number(payload.serviceCharge);
  const subtractFromSavingAmount = membership.accountBalance - subtractTotalFromSavingAmount;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // subtract membership account Banalce
    const updatedSavingAmount = await MembershipModel.findByIdAndUpdate(
      payload.memberId,
      { $set: { accountBalance: subtractFromSavingAmount } },
      { new: true, session } // Ensure session is passed here
    );

    if (!updatedSavingAmount) {
      throw new AppError(404, "not found");
    }

    // created saving transaction history
    const newSavingWithdraw = await SavingWithdrawModel.create([payload], {
      session,
    });

    await session.commitTransaction();

    return newSavingWithdraw;
  } catch (err: any) {
    await session.abortTransaction();
    throw Error(err);
  } finally {
    session.endSession();
  }
};

const getAllSavingWithdrawFromDB = async () => {
  const result = await SavingWithdrawModel.find();
  return result;
};

export const SavingWithdrawServices = {
  createSavingWithdrawIntoDB,
  getAllSavingWithdrawFromDB,
};
