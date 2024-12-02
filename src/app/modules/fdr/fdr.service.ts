import mongoose from "mongoose";
import { Fdr } from "./fdr.interface";
import { FdrModel } from "./fdr.model";

const createFdrIntoDB = async (fdrData: Fdr) => {
  const result = await FdrModel.create(fdrData);
  return result;
};

const getAllFdrFromDB = async (email: string) => {
  const result = await FdrModel.find({ branchEmail: { $eq: email } }).populate(
    "memberOfFdrApplying"
  );
  return result;
};

const getSingleFdrFromDB = async (id: string) => {
  const result = await FdrModel.findOne({
    memberOfFdrApplying: new mongoose.Types.ObjectId(id),
  }).populate("memberOfFdrApplying");

  return result;
};

export const FdrServices = {
  createFdrIntoDB,
  getAllFdrFromDB,
  getSingleFdrFromDB,
};
