import { NextFunction, Request, Response } from "express";
import { MembershipServices } from "./membership.service";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import { string } from "zod";

const createMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MembershipServices.createMembershipIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Membership is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllMembership = async (req: Request, res: Response) => {
  const {email} = req.params;

  console.log("inside get all member 000");

  const result = await MembershipServices.getAllMembershipFromDB(
    email
  );

  // send response
  res.status(200).json({
    success: true,
    message: "Membership are retrieve successfully",
    data: result,
  });
};

const getSingleMembership = async (req: Request, res: Response) => {
  const result = await MembershipServices.getSingleMembershipFromDB(
    req.params.id
  );

  // send response
  res.status(200).json({
    success: true,
    message: "Membership is retrieve successfully",
    data: result,
  });
};

const findMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const searchQuery = req.query.query;
    // const email = req.body;

    console.log("Inside searching Member");

    // const { refreshToken } = req.cookies;
    // const {email} = jwtDecode<JwtPayload>(refreshToken);

    // const email = "branch@gmail.com";

    // const result = await MembershipServices.getSearchingMemberFromDB(
    //   searchQuery, email
    // );

    // send response
    res.status(200).json({
      success: true,
      message: "Membership searching",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

export const MembershipControllers = {
  createMembership,
  getAllMembership,
  getSingleMembership,
  findMember
};

