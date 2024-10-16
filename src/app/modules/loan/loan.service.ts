import { Loan } from "./loan.interface";
import { LoanModel } from "./loan.model";

const createLoanIntoDB = async (loanData: Loan) => {
  const result = await LoanModel.create(loanData);
  return result;
};

const getAllLoanFromDB = async (email: string) => {
  const result = await LoanModel.find({
    branchEmail: email,
  }).populate("memberOfApplying");
  return result;
};

const getPendingLoanFromDB = async (email: string) => {
  const result = await LoanModel.find({
    branchEmail: email,
    status: { $eq: "Pending" },
  }).populate("memberOfApplying");
  return result;
};

const getActiveLoanFromDB = async (email: string) => {
  const result = await LoanModel.find({
    branchEmail: email,
    status: { $eq: "Active" },
  }).populate("memberOfApplying");
  return result;
};

const updateLoanFromDB = async (id: string, payload: string) => {
  const result = await LoanModel.findByIdAndUpdate(
    { _id: id },
    { $set: { status: payload } },
    { new: true }
  );
  return result;
};

const getOverdueLoanFromDB = async (email: string) => {
  const loanData = await LoanModel.find({
    branchEmail: email,
    status: { $eq: "Active" },
  }).populate("memberOfApplying");

  // Get today's date
  const today = new Date();

  // Filter for loans where endDate is not over
  const activeLoans = loanData.filter(item => {
    const endDate = new Date(item.endDate); // Correctly parse "YYYY-MM-DD"
    return endDate <= today; // Check if endDate is today or in the future
  });

  return activeLoans;
};

export const LoanServices = {
  createLoanIntoDB,
  getAllLoanFromDB,
  getPendingLoanFromDB,
  getActiveLoanFromDB,
  updateLoanFromDB,
  getOverdueLoanFromDB
};
