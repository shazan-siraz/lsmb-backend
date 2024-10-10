import mongoose from "mongoose";
import { User } from "../user/user.interface";
import { Employee } from "./employee.interface";
import { EmployeeModel } from "./employee.model";
import { UserModel } from "../user/user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createEmployeeIntoDB = async (
  password: string,
  employeeData: Employee
) => {


  const isEmployeeExits = await EmployeeModel.findOne({
    employeeEmail: employeeData.employeeEmail,
  });

  if(isEmployeeExits) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Employee Email is already exits!')
  }

  // create a user object
  const userData: Partial<User> = {};

  userData.userId = employeeData.employeeId;
  userData.email = employeeData.employeeEmail;
  userData.password = password;
  userData.role = "fieldOfficer";
  userData.status = "in-progress";
  userData.isDeleted = false;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // create a user (transaction-1)
    const newUser = await UserModel.create([userData], { session }); // array

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    // set userId , _id as userId
    employeeData.userId = newUser[0]._id; //reference _id




    // create a Admin (transaction-2)
    const newEmployee = await EmployeeModel.create([employeeData], { session });

    if (!newEmployee.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Employee");
    }

    await session.commitTransaction();
    await session.endSession();

    return newEmployee;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err);
  }
};

export const EmployeeServices = {
  createEmployeeIntoDB,
};
