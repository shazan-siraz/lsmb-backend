import { Loan } from "./loan.interface";
import { LoanModel } from "./loan.model";

const createLoanIntoDB = async (loanData: Loan) => {
  const result = await LoanModel.create(loanData);
  return result;
};

const getAllLoanFromDB = async () => {
  const result = await LoanModel.find().populate("memberOfApplying");
  return result;
};

const getPendingLoanFromDB = async () => {
  const result = await LoanModel.find({status: {$ne: "Active"}}).populate("memberOfApplying");
  return result;
};

const getActiveLoanFromDB = async () => {
  const result = await LoanModel.find({status: {$eq: "Active"}}).populate("memberOfApplying");
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

export const LoanServices = {
  createLoanIntoDB,
  getAllLoanFromDB,
  getPendingLoanFromDB,
  getActiveLoanFromDB,
  updateLoanFromDB
};
