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

// const getAllLoan = async (req: Request, res: Response) => {
//   try {
//     const { refreshToken } = req.cookies;
//     const { email } = jwtDecode<JwtPayload>(refreshToken);

//     const result = await LoanServices.getAllLoanFromDB(email);

//     // send response
//     res.status(200).json({
//       success: true,
//       message: "Loan is retrieve successfully",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: err,
//     });
//   }
// };

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
    const { email } = req.params;
    const result = await LoanCollectionServices.lastLoanCollectionFromDB(
      email
    );

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

export const LoanCollectionControllers = {
  createLoanCollection,
  totalLoanCollection,
  lastLoanCollection
};
