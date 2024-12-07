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
  const { email } = req.params;

  const result = await MembershipServices.getAllMembershipFromDB(email);

  // send response
  res.status(200).json({
    success: true,
    message: "Membership are retrieve successfully",
    data: result,
  });
};

const getAllSavingMembership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await MembershipServices.getAllSavingMembershipFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Saving Membership are retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
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

const getTotalMemberAccountBalaceAndProcessFees = async (
  req: Request,
  res: Response
) => {
  const { email } = req.params;

  const result =
    await MembershipServices.getTotalMemberAccountBalaceAndProcessFeesFromDB(email);

  // send response
  res.status(200).json({
    success: true,
    message: "Total Member Account Balance And Process Fees is retrieve successfully",
    data: result,
  });
};

const searchMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const searchQuery = req.query.query;
    const searchEmail = req.query.email;

    const result = await MembershipServices.searchMemberFromDB(
      searchQuery,
      searchEmail
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Membership searching successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const MembershipControllers = {
  createMembership,
  getAllMembership,
  getAllSavingMembership,
  getSingleMembership,
  getTotalMemberAccountBalaceAndProcessFees,
  searchMember,
};
