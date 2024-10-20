import { SuperAdminModel } from "./superAdmin.model";


const getAllSuperAdminFromDB = async () => {
  const result = await SuperAdminModel.find().populate('user');
  return result;
};

const getSingleSuperAdminFromDB = async (email: any) => {
  const result = await SuperAdminModel.findOne({email: email}).populate('user');
  return result;
};

export const SuperAdminServices = {
  getAllSuperAdminFromDB,
  getSingleSuperAdminFromDB
};
