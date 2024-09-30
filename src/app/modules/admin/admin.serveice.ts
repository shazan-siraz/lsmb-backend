import { Admin } from "./admin.interface";
import { AdminModel } from "./admin.model";


const getAllAdminFromDB = async () => {
  const result = await AdminModel.find().populate('user');
  return result;
};

export const AdminServices = {
  getAllAdminFromDB,
};
