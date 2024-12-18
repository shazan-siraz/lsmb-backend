import { generateNewLoanNo } from "../../utils/generateId";
import { Loan } from "./loan.interface";
import { LoanModel } from "./loan.model";

const createLoanIntoDB = async (loanData: Loan) => {
  const loanNo = await generateNewLoanNo(loanData?.branchEmail);

  loanData.loanNo = loanNo;

  const result = await LoanModel.create(loanData);
  return result;
};

const getAllLoanFromDB = async (email: string) => {
  const result = await LoanModel.find({
    branchEmail: email,
  }).populate("memberOfApplying");
  return result;
};

const getSingleLoanFromDB = async (id: string) => {
  const result = await LoanModel.findById({
    _id: id,
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
  const activeLoans = loanData.filter((item) => {
    const endDate = new Date(item.endDate); // Correctly parse "YYYY-MM-DD"
    return endDate <= today; // Check if endDate is today or in the future
  });

  return activeLoans;
};

const getTotalLoanAmountWithoutPorcessFeesFromDB = async (email: string) => {
  const result = await LoanModel.aggregate([
    { $match: { branchEmail: email, status: "Active" } }, // Active loans match
    {
      $group: {
        _id: null,
        totalLoanAmount: { $sum: "$loanAmount" }, // Sum of loan amounts
        totalInsurance: { $sum: "$insurance" }, // Sum of insurances
        totalProcessFees: { $sum: "$processFees" }, // Sum of process fees
      },
    },
    {
      $project: {
        _id: 0, // Exclude the _id field
        netAmount: {
          $subtract: [
            { $add: ["$totalLoanAmount", "$totalInsurance"] },
            "$totalProcessFees",
          ],
        },
      },
    },
  ]);

  return result[0]?.netAmount || 0;
};

const getLastLoanDocumentFromDB = async (email: string) => {
  const result = await LoanModel.findOne({ branchEmail: email }).sort({
    createdAt: -1,
  });

  return result;
};

const searchLoanFromDB = async (searchQuery: any, searchEmail: any) => {
  try {
    const query = {
      branchEmail: searchEmail, // Branch-specific filtering
      status: "Active",
      $or: [
        { memberId: { $regex: searchQuery, $options: "i" } },
        { loanNo: { $regex: searchQuery, $options: "i" } },
        { memberName: { $regex: searchQuery, $options: "i" } },
        { memberPhone: { $regex: searchQuery, $options: "i" } },
      ],
    };

    const results = await LoanModel.find(query).populate("memberOfApplying");

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

export const LoanServices = {
  createLoanIntoDB,
  getAllLoanFromDB,
  getSingleLoanFromDB,
  getPendingLoanFromDB,
  getActiveLoanFromDB,
  updateLoanFromDB,
  getOverdueLoanFromDB,
  getTotalLoanAmountWithoutPorcessFeesFromDB,
  getLastLoanDocumentFromDB,
  searchLoanFromDB,
};
