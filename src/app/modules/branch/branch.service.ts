import { Branch } from "./branch.interface";
import { BranchModel } from "./branch.model";


const getAllBranchFromDB = async () => {
  const result = await BranchModel.find().populate("registeredPackage");
  return result;
};

export const BranchServices = {
  getAllBranchFromDB,
};
