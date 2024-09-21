import { Request, Response } from "express";
import { LoanServices } from "./loan.service";

const createLoan = async (req: Request, res: Response) => {
  try {
    const result = await LoanServices.createLoanIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Loan is created successfully",
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

const getAllLoan = async (req: Request, res: Response) => {
  try {
    const result = await LoanServices.getAllLoanFromDB();

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

const getPendingLoan = async (req: Request, res: Response) => {
  try {
    const result = await LoanServices.getPendingLoanFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: "Pending Loan is retrieve successfully",
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

const getActiveLoan = async (req: Request, res: Response) => {
  try {
    const result = await LoanServices.getActiveLoanFromDB();

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

export const LoanControllers = {
  createLoan,
  getAllLoan,
  getPendingLoan,
  getActiveLoan,
  updateLoan,
};
