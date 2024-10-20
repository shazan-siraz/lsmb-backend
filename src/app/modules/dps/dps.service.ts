import { Dps } from "./dps.interface";
import { DpsModel } from "./dps.model";

const createDpsIntoDB = async (dpsData: Dps) => {
  const result = await DpsModel.create(dpsData);
  return result;
};

const getAllDpsFromDB = async (email: string) => {
  const result = await DpsModel.find({ branchEmail: { $eq: email } }).populate(
    "memberOfApplying"
  );
  return result;
};

export const DpsServices = {
  createDpsIntoDB,
  getAllDpsFromDB,
};
