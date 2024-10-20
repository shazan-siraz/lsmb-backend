import { Request, Response } from "express";
import { SuperAdminServices } from "./superAdmin.serveice";

const getAllSuperAdmin = async (req: Request, res: Response) => {
  const result = await SuperAdminServices.getAllSuperAdminFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Super Admin are retrieve successfully",
    data: result,
  });
};

const getSingleSuperAdmin = async (req: Request, res: Response) => {



  const result = await SuperAdminServices.getSingleSuperAdminFromDB(req.params.email);

  // send response
  res.status(200).json({
    success: true,
    message: "Super Admin is retrieve successfully",
    data: result,
  });
};

export const SuperAdminControllers = {
  getAllSuperAdmin,
  getSingleSuperAdmin
};
