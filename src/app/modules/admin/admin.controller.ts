import { Request, Response } from "express";
import { AdminServices } from "./admin.serveice";

const getAllAdmin = async (req: Request, res: Response) => {
  const result = await AdminServices.getAllAdminFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Admin are retrieve successfully",
    data: result,
  });
};

export const AdminControllers = {
  getAllAdmin,
};