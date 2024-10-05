import { Request, Response } from "express";
import { BranchServices } from "./branch.service";


const getAllBranch = async (req: Request, res: Response) => {
  const result = await BranchServices.getAllBranchFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Branch are retrieve successfully",
    data: result,
  });
};

export const BranchControllers = {
 
  getAllBranch,
};
