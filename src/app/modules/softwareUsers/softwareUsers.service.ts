import { SoftwareUsers } from "./softwareUsers.interface";
import { SoftwareUsersModel } from "./softwareUsers.model";

const createSoftwareUsersIntoDB = async (softwareUsersData: SoftwareUsers) => {
  const result = await SoftwareUsersModel.create(softwareUsersData);
  return result;
};

const getAllSoftwareUsersFromDB = async () => {
  const result = await SoftwareUsersModel.find({ isDeleted: { $ne: true } });
  return result;
};

const deleteSoftwareUsersFromDB = async (id: string) => {
  const result = await SoftwareUsersModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

export const SoftwareUsersServices = {
  createSoftwareUsersIntoDB,
  getAllSoftwareUsersFromDB,
  deleteSoftwareUsersFromDB,
};
