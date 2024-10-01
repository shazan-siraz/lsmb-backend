import { Request, Response } from "express";
import { groupServices } from "./group.service";

const createGroup = async (req: Request, res: Response) => {
  
  try {
    const result = await groupServices.createGroupIntoDB(req.body);

    // send response
    res.status(200).json({
      success: true,
      message: "Group is created successfully",
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

const updateGroup = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const updateData = {
      groupCode: req.body.groupCode,
      groupTitle: req.body.groupTitle,
    };

    const result = await groupServices.updateGroupIntoDB(_id, updateData);

    // send response
    res.status(200).json({
      success: true,
      message: "Group is updated successfully",
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

const getAllGroup = async (req: Request, res: Response) => {

  console.log(req.cookies);

  try {
    const result = await groupServices.getAllGroup();

    // send response
    res.status(200).json({
      success: true,
      message: "Group are retrieve successfully",
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

export const groupController = {
  createGroup,
  updateGroup,
  getAllGroup,
};
