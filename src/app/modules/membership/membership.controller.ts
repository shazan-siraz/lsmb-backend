import { Request, Response } from "express";
import { MembershipServices } from "./membership.service";

const createMembership = async (req: Request, res: Response) => {
  try {
    const result = await MembershipServices.createMembershipIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Membership is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getAllMembership = async (req: Request, res: Response) => {
  const result = await MembershipServices.getAllMembershipFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Membership are retrieve successfully",
    data: result,
  });
};

const getSingleMembership = async (req: Request, res: Response) => {

  const result = await MembershipServices.getSingleMembershipFromDB(req.params.id);

  // send response
  res.status(200).json({
    success: true,
    message: "Membership is retrieve successfully",
    data: result,
  });
};

export const MembershipControllers = {
  createMembership,
  getAllMembership,
  getSingleMembership
};
