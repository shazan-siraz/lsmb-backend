import { Request, Response } from "express";
import { CompanyServices } from "./company.service";

const getAllCompany = async (req: Request, res: Response) => {
  const result = await CompanyServices.getAllCompanyFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Company are retrieve successfully",
    data: result,
  });
};

const getSingleCompany = async (req: Request, res: Response) => {
  const result = await CompanyServices.getSingleCompanyFromDB(req.params.email);

  // send response
  res.status(200).json({
    success: true,
    message: "Company is retrieve successfully",
    data: result,
  });
};

export const CompanyControllers = {
  getAllCompany,
  getSingleCompany,
};
