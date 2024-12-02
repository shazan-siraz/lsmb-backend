import { RegisteredPackage } from "./registerPackage.interface";
import RegisterPackageModel from "./registerPackage.model";

const createRegisterPackageIntoDB = async (
  registerPackageData: RegisteredPackage
) => {
  console.log("Inside Service");
  console.log(registerPackageData);

  const result = await RegisterPackageModel.create(registerPackageData);
  return result;
};

const getAllRegisterPackageFromDB = async () => {
  const result = await RegisterPackageModel.find({ isDeleted: { $ne: true } });
  return result;
};

const getDeleteRegisterPackageFromDB = async (id: string) => {
  const result = await RegisterPackageModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

export const RegisterPackageServices = {
  createRegisterPackageIntoDB,
  getAllRegisterPackageFromDB,
  getDeleteRegisterPackageFromDB,
};
