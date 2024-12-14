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

const todayDpsCollectionFromDB = async (email: string) => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // আজকের শুরু
  const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // আজকের শেষ

  const result = await DpsCollectionModel.find({
    branchEmail: { $eq: email },
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  })
    .sort({ createdAt: -1 }) // Descending order
    .populate("memberOfApplying")
    .populate("dpsId");

  return result;
};

const getTotalDpsBalaceByOneDpsAcFromDB = async (dpsAcNo: string) => {
  const result = await DpsCollectionModel.aggregate([
    { $match: { dpsAcNo: dpsAcNo, isDeleted: false } }, // Branch match
    {
      $group: {
        _id: null,
        totalDpsCollectionAmount: { $sum: "$dpsCollectionAmount" }, // Sum of dpsCollectionAmount
      },
    },
  ]);

  return result[0]?.totalDpsCollectionAmount || 0;
};

const getTotalDpsCollectionBalaceFromDB = async (email: string) => {
  const result = await DpsCollectionModel.aggregate([
    { $match: { branchEmail: email, isDeleted: false } }, // Branch match
    {
      $group: {
        _id: null,
        totalDpsCollectionAmount: { $sum: "$dpsCollectionAmount" }, // Sum of dpsCollectionAmount
      },
    },
  ]);

  return result[0]?.totalDpsCollectionAmount || 0;
};

export const DpsCollectionServices = {
  createDpsCollectionIntoDB,
  getAllDpsCollectionFromDB,
  todayDpsCollectionFromDB,
  getTotalDpsBalaceByOneDpsAcFromDB,
  getTotalDpsCollectionBalaceFromDB,
};
