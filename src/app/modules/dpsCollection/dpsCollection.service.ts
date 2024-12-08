import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { DpsCollection } from "./dpsCollection.interface";
import { DpsCollectionModel } from "./dpsCollection.model";

const createDpsCollectionIntoDB = async (dpsCollectionData: DpsCollection) => {
  const result = await DpsCollectionModel.create(dpsCollectionData);
  return result;
};

const getAllDpsCollectionFromDB = async (email: string) => {
  const result = await DpsCollectionModel.find({
    branchEmail: { $eq: email },
  }).populate("memberOfApplying");
  return result;
};

export const DpsCollectionServices = {
  createDpsCollectionIntoDB,
  getAllDpsCollectionFromDB
};
