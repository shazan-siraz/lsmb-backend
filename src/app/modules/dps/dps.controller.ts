import { Request, Response } from "express";
import { DpsServices } from "./dps.service";


const createDps = async (req: Request, res: Response) => {
  try {
    const result = await DpsServices.createDpsIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Dps is created successfully",
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

const getAllDps = async (req: Request, res: Response) => {
  const result = await DpsServices.getAllDpsFromDB();

  // send response
  res.status(200).json({
    success: true,
    message: "Dps are retrieve successfully",
    data: result,
  });
};

export const DpsControllers = {
  createDps,
  getAllDps
};
