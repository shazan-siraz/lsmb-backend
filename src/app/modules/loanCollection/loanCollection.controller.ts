import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import { LoanCollectionServices } from "./loanCollection.service";

const createLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await LoanCollectionServices.createLoanCollectionIntoDB(
      req.body
    );

    // send response
    res.status(200).json({
      success: true,
      message: "LoanCollection is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  const updateLoanData = {
    installmentAmount: req.body.installmentAmount,
    penaltyAmount: req.body.penaltyAmount,
    transactionNote: req.body.transactionNote,
  };

  try {
    const result = await LoanCollectionServices.updateLoanCollectionIntoDB(
      id,
      updateLoanData
    );

    // send response
    res.status(200).json({
      success: true,
      message: "update LoanCollection is successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;

  try {
    const result = await LoanCollectionServices.deleteLoanCollectionIntoDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "Delete LoanCollection is successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const totalLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    const result = await LoanCollectionServices.totalLoanCollectionFromDB(
      email
    );

    // send response
    res.status(200).json({
      success: true,
      message: "Total Loan Collection is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const lastLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { loanNo } = req.params;
    const result = await LoanCollectionServices.lastLoanCollectionFromDB(loanNo);

    // send response
    res.status(200).json({
      success: true,
      message: "Last Loan Collection is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const todayLoanCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result = await LoanCollectionServices.todayLoanCollectionFromDB(
      email
    );

    // send response
    res.status(200).json({
      success: true,
      message: "today Loan Transaction is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTotalLoanCollectionAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;

    const result =
      await LoanCollectionServices.getTotalLoanCollectionAmountFromDB(email);

    // send response
    res.status(200).json({
      success: true,
      message: "Total Loan Collection Amount is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getOneAccountTotalLoanCollectionAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result =
      await LoanCollectionServices.getOneAccountTotalLoanCollectionAmountFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: "One Account Total Loan Collection Amount is retrieve successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const LoanCollectionControllers = {
  createLoanCollection,
  totalLoanCollection,
  lastLoanCollection,
  todayLoanCollection,
  getTotalLoanCollectionAmount,
  updateLoanCollection,
  deleteLoanCollection,
  getOneAccountTotalLoanCollectionAmount
};
