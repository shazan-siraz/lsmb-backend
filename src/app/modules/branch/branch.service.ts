import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { BranchModel } from "./branch.model";

const getAllBranchFromDB = async (email: string) => {
  const result = await BranchModel.find({companyEmail: email}).populate("user").populate("company");

  return result;
};

const getSingleBranchFromDB = async (email: string) => {
  const branchUser = await BranchModel.findOne({ branchEmail: email })
    .populate("user")
    .populate("company");

  if (!branchUser) {
    throw new AppError(httpStatus.NOT_FOUND, "Email do not match!");
  }

  return branchUser;
};

export const BranchServices = {
  getAllBranchFromDB,
  getSingleBranchFromDB,
};
