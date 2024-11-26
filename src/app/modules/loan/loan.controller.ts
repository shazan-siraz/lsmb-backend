import { NextFunction, Request, Response } from "express";
import { LoanServices } from "./loan.service";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

const createLoan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LoanServices.createLoanIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Loan is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllLoan = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.cookies;
    const { email } = jwtDecode<JwtPayload>(refreshToken);

    const result = await LoanServices.getAllLoanFromDB("branch@gmail.com");

    // send response
    res.status(200).json({
      success: true,
      message: "Loan is retrieve successfully",
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

const getSingleLoan = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await LoanServices.getSingleLoanFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Loan is retrieve successfully",
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

const getPendingLoan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await LoanServices.getPendingLoanFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Pending Loan is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getActiveLoan = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    const result = await LoanServices.getActiveLoanFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Active Loan is retrieve successfully",
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

const updateLoan = async (req: Request, res: Response) => {
  try {
    const result = await LoanServices.updateLoanFromDB(
      req.body.id,
      req.body.status
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Loan is updated successfully",
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

const getOverdueLoan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const { email } = jwtDecode<JwtPayload>(refreshToken);

    const result = await LoanServices.getOverdueLoanFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Overdue Loan is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalLoanAmountWithoutPorcessFees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result =
      await LoanServices.getTotalLoanAmountWithoutPorcessFeesFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message:
        "Total Loan Amount without Process fees is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const searchLoan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.query;
    const email = req.query.email;

    const result = await LoanServices.searchLoanFromDB(query, email);

    // send response
    res.status(200).json({
      success: true,
      message: "Search Loan is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const LoanControllers = {
  createLoan,
  getAllLoan,
  getSingleLoan,
  getPendingLoan,
  getActiveLoan,
  updateLoan,
  getOverdueLoan,
  getTotalLoanAmountWithoutPorcessFees,
  searchLoan,
};
