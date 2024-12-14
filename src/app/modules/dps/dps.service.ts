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

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Step 1: Create a DPS account
    const [newDpsAccount] = await DpsModel.create([dpsData], { session });

    if (!newDpsAccount) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create DpsAccount");
    }

    // Step 2: Create a DPS collection with the DPS ID
    const dpsCollectionData: Partial<DpsCollection> = {
      memberOfApplying: dpsData.memberOfApplying,
      branchEmail: dpsData.branchEmail,
      companyEmail: dpsData.companyEmail,
      dpsId: newDpsAccount._id, // Include DPS ID
      dateOfCollection: dpsData.dpsStart,
      dpsAcNo: dpsData.dpsAcNo,
      dpsCollectionAmount: dpsData.startingBalance,
      penaltyAmount: 0,
      transactionNote: "",
      isDeleted: false,
    };

    const [dpsCollection] = await DpsCollectionModel.create(
      [dpsCollectionData],
      { session }
    );

    if (!dpsCollection) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Failed to create dpsCollection"
      );
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
  searchDpsAccountFromDB,
  getSingleDpsByIdFromDB
};
