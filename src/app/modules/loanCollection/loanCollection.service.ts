import { LoanCollection } from "./loanCollection.interface";
import { LoanCollectionModel } from "./loanCollection.model";

const createLoanCollectionIntoDB = async (
  LoanCollectionData: LoanCollection
) => {
  const result = await LoanCollectionModel.create(LoanCollectionData);
  return result;
};

// const getAllLoanCollectionFromDB = async (email: string) => {
//   const result = await LoanModel.find({
//     branchEmail: email,
//   }).populate("memberOfApplying");
//   return result;
// };

const totalLoanCollectionFromDB = async (email: string) => {
  const documents = await LoanCollectionModel.find({ memberEmail: email });

  // Calculate the sum of installmentAmount
  const totalAmount = documents.reduce(
    (sum, doc) => sum + (doc.installmentAmount || 0),
    0
  );

  return totalAmount;
};

const lastLoanCollectionFromDB = async (email: string) => {
  const lastDocument = await LoanCollectionModel.find({ memberEmail: email }) // Filter by email
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
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  })
    .sort({ createdAt: -1 }) // Descending order
    .populate("memberId");

  return result;
};

const getTotalLoanCollectionAmountFromDB = async (email: string) => {
  const result = await LoanCollectionModel.aggregate([
    { $match: { branchEmail: email } },
    {
      $group: {
        _id: null,
        totalLoanCollectionAmount: { $sum: "$installmentAmount" }, // installmentAmount এর যোগফল
      },
    }
  ]);

  return result[0]?.totalLoanCollectionAmount || 0;
};

export const LoanCollectionServices = {
  createLoanCollectionIntoDB,
  totalLoanCollectionFromDB,
  lastLoanCollectionFromDB,
  todayLoanCollectionFromDB,
  getTotalLoanCollectionAmountFromDB
};
