import mongoose from "mongoose";
import { LoanCollection } from "./loanCollection.interface";
import { LoanCollectionModel } from "./loanCollection.model";

const createLoanCollectionIntoDB = async (
  LoanCollectionData: LoanCollection
) => {
  const result = await LoanCollectionModel.create(LoanCollectionData);
  return result;
};

const updateLoanCollectionIntoDB = async (
  id: string,
  payload: {
    installmentAmount: number;
    penaltyAmount: number;
    transactionNote: string;
  }
) => {
  const result = await LoanCollectionModel.findByIdAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

const deleteLoanCollectionIntoDB = async (id: string) => {
  const result = await LoanCollectionModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const totalLoanCollectionFromDB = async (email: string) => {
  const documents = await LoanCollectionModel.find({ memberEmail: email });

  // Calculate the sum of installmentAmount
  const totalAmount = documents.reduce(
    (sum, doc) => sum + (doc.installmentAmount || 0),
    0
  );

  return totalAmount;
};

const lastLoanCollectionFromDB = async (loanNo: string) => {
  const lastDocument = await LoanCollectionModel.find({ loanNo: loanNo })
    .sort({ _id: -1 }) // Sort by _id in descending order
    .limit(1); // Get only the last document

  return lastDocument[0] || null; // Return the document or null if not found
};

const todayLoanCollectionFromDB = async (email: string) => {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // আজকের শুরু
  const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // আজকের শেষ

  const result = await LoanCollectionModel.find({
    branchEmail: { $eq: email },
    isDeleted: false,
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  })
    .sort({ createdAt: -1 }) // Descending order
    .populate("memberId");

  return result;
};

const getTotalLoanCollectionAmountFromDB = async (email: string) => {
  const result = await LoanCollectionModel.aggregate([
    { $match: { branchEmail: email, isDeleted: false } },
    {
      $group: {
        _id: null,
        totalLoanCollectionAmount: { $sum: "$installmentAmount" }, // installmentAmount এর যোগফল
      },
    },
  ]);

  console.log("result", result[0]?.totalLoanCollectionAmount || 0);

  return result[0]?.totalLoanCollectionAmount || 0;
};

const getOneAccountTotalLoanCollectionAmountFromDB = async (id: string) => {
  const result = await LoanCollectionModel.aggregate([
    { $match: { loanId: new mongoose.Types.ObjectId(id), isDeleted: false } },
    {
      $group: {
        _id: null,
        totalLoanCollectionAmount: { $sum: "$installmentAmount" }, // installmentAmount এর যোগফল
      },
    },
  ]);

  return result[0]?.totalLoanCollectionAmount || 0;
};

export const LoanCollectionServices = {
  createLoanCollectionIntoDB,
  totalLoanCollectionFromDB,
  lastLoanCollectionFromDB,
  todayLoanCollectionFromDB,
  getTotalLoanCollectionAmountFromDB,
  updateLoanCollectionIntoDB,
  deleteLoanCollectionIntoDB,
  getOneAccountTotalLoanCollectionAmountFromDB
};
