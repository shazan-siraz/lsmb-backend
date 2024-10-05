import { RegisterPackage } from "./registerPackage.interface";
import RegisterPackageModel from "./registerPackage.model";

const createRegisterPackageIntoDB = async (
  registerPackageData: RegisterPackage
) => {
  const result = await RegisterPackageModel.create(registerPackageData);
  return result;
};

const getAllRegisterPackageFromDB = async () => {
  const result = await RegisterPackageModel.find();
  return result;
};

export const RegisterPackageServices = {
  createRegisterPackageIntoDB,
  getAllRegisterPackageFromDB,
};
