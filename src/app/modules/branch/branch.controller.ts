import { NextFunction, Request, Response } from "express";
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

const getSingleBranch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.params.email;
    const result = await BranchServices.getSingleBranchFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Branch is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BranchControllers = {
  getAllBranch,
  getSingleBranch,
};
