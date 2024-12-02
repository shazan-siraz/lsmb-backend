import mongoose from "mongoose";
import { Dps } from "./dps.interface";
import { DpsModel } from "./dps.model";
import { strict } from "assert";
import { string } from "zod";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createDpsIntoDB = async (dpsData: Dps) => {

  const dpsAcNo = dpsData?.dpsAcNo;
  const isDpsAcExits = await DpsModel.findOne({dpsAcNo: dpsAcNo});

  if(isDpsAcExits) {
    throw new AppError(httpStatus.BAD_REQUEST, "DPS Account No is already Exists!")
  }

  const result = await DpsModel.create(dpsData);
  return result;
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

export const DpsServices = {
  createDpsIntoDB,
  getAllDpsFromDB,
  getSingleDpsFromDB,
};
