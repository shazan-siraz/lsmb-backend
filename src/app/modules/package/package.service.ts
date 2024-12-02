import { Package } from "./package.interface";
import PackageModel from "./package.model";

const createPackageIntoDB = async (payload: Package) => {
  const result = await PackageModel.create(payload);
  return result;
};

const getAllPackageFromDB = async () => {
  const result = await PackageModel.find({ isDeleted: { $ne: true } });
  return result;
};

export const PackageServices = {
  createPackageIntoDB,
  getAllPackageFromDB
};
