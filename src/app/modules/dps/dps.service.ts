import mongoose from "mongoose";
import { Dps } from "./dps.interface";
import { DpsModel } from "./dps.model";
import { strict } from "assert";
import { string } from "zod";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { DpsCollection } from "../dpsCollection/dpsCollection.interface";
import { DpsCollectionModel } from "../dpsCollection/dpsCollection.model";

const createDpsIntoDB = async (dpsData: Dps) => {
  const dpsAcNo = dpsData?.dpsAcNo;
  const isDpsAcExits = await DpsModel.findOne({ dpsAcNo: dpsAcNo });

  if (isDpsAcExits) {
    throw new AppError(httpStatus.BAD_REQUEST, "DPS A/C No has been taken!");
  }

  // create a dpsCollection object
  const dpsCollectionData: Partial<DpsCollection> = {};

  dpsCollectionData.memberOfApplying = dpsData.memberOfApplying;
  dpsCollectionData.branchEmail = dpsData.branchEmail;
  dpsCollectionData.companyEmail = dpsData.companyEmail;
  dpsCollectionData.dateOfCollection = dpsData.dpsStart;
  dpsCollectionData.dpsAcNo = dpsData.dpsAcNo;
  dpsCollectionData.dpsCollectionAmount = dpsData.startingBalance;
  dpsCollectionData.penaltyAmount = 0;
  dpsCollectionData.transactionNote = "";
  dpsCollectionData.isDeleted = false;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // create a dpsCollection (transaction-1)
    const dpsCollection = await DpsCollectionModel.create([dpsCollectionData], {
      session,
    }); // array

    if (!dpsCollection.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Failed to create dpsCollection"
      );
    }

    // create a dpsAccount (transaction-2)
    const newDpsAccount = await DpsModel.create([dpsData], { session });

    if (!newDpsAccount.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create DpsAccount");
    }

    await session.commitTransaction();
    await session.endSession();

    return newDpsAccount;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err);
  }
};

const getAllDpsFromDB = async (email: string) => {
  const result = await DpsModel.find({ branchEmail: { $eq: email } }).populate(
    "memberOfApplying"
  );
  return result;
};

const getSingleDpsFromDB = async (id: string) => {
  const result = await DpsModel.findOne({
    memberOfApplying: new mongoose.Types.ObjectId(id),
  }).populate("memberOfApplying");

  return result;
};

const getSingleDpsByIdFromDB = async (id: string) => {
  const result = await DpsModel.findById({
    _id: id,
  }).populate("memberOfApplying");

  return result;
};

const getTotalDpsAmountFromDB = async (email: string) => {
  const result = await DpsModel.aggregate([
    { $match: { branchEmail: email } },
    {
      $group: {
        _id: null,
        totalDpsAmount: { $sum: "$startingBalance" }, // startingBalance এর যোগফল
      },
    },
  ]);

  return result[0]?.totalDpsAmount || 0;
};

const searchDpsAccountFromDB = async (searchQuery: any, searchEmail: any) => {
  try {
    // Build query dynamically
    const query = {
      branchEmail: searchEmail, // Branch-specific filtering
      $or: [
        { memberName: { $regex: searchQuery, $options: "i" } },
        { memberPhoneNo: { $regex: searchQuery, $options: "i" } },
        { dpsAcNo: { $regex: searchQuery, $options: "i" } },
      ],
    };

    const results = await DpsModel.find(query).populate("memberOfApplying");

    // Log results if needed
    if (!results.length) {
      return [];
    }

    return results;
  } catch (error) {
    console.error("Error searching members:", error);
    throw new Error("Failed to search members. Please try again later.");
  }
};

export const DpsServices = {
  createDpsIntoDB,
  getAllDpsFromDB,
  getSingleDpsFromDB,
  getTotalDpsAmountFromDB,
  searchDpsAccountFromDB,
  getSingleDpsByIdFromDB
};
