import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { BranchModel } from "./branch.model";

const getAllBranchFromDB = async () => {
  const result = await BranchModel.find().populate("registeredPackage");
  return result;
};

const getSingleBranchFromDB = async (email: string) => {
  const branchUser = await BranchModel.findOne({ branchEmail: email }).populate(
    "registeredPackage"
  );

  if (!branchUser) {
    throw new AppError(httpStatus.NOT_FOUND, "Email do not match!");
  }

  return branchUser;
};

export const BranchServices = {
  getAllBranchFromDB,
  getSingleBranchFromDB,
};
