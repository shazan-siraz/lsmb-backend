import { CompanyModel } from "./company.model";

const getAllCompanyFromDB = async () => {
  const result = await CompanyModel.find()
    .populate("user")
    .populate("registeredPackage");
  return result;
};


const getSingleCompanyFromDB = async (email: any) => {
  const result = await CompanyModel.findOne({ companyEmail: email })
    .populate("user")
    .populate("registeredPackage");
  return result;
};

export const CompanyServices = {
  getAllCompanyFromDB,
  getSingleCompanyFromDB,
};
