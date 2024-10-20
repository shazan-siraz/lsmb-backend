import { get } from "http";
import { AdminModel } from "./admin.model";


const getAllAdminFromDB = async () => {
  const result = await AdminModel.find().populate('user');
  return result;
};

const getSingleAdminFromDB = async (email: string) => {
  const result = await AdminModel.findOne({email: email}).populate('user');
  return result;
};

export const AdminServices = {
  getAllAdminFromDB,
  getSingleAdminFromDB
};
