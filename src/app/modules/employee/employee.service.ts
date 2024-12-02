import mongoose from "mongoose";
import { User } from "../user/user.interface";
import { Employee } from "./employee.interface";
import { EmployeeModel } from "./employee.model";
import { UserModel } from "../user/user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { generateEmployeeId } from "../../utils/generateId";
import { CompanyModel } from "../company/company.model";
import { RegisteredPackage } from "../registerPackage/registerPackage.interface";
import { BranchModel } from "../branch/branch.model";

const createEmployeeIntoDB = async (
  password: string,
  employeeData: Employee
) => {
  const company = await CompanyModel.findOne({
    companyEmail: employeeData.companyEmail,
  })
    .select("registeredPackage")
    .populate("registeredPackage", "userLimit");

  const userLimit = (company?.registeredPackage as RegisteredPackage)
    ?.userLimit;

  // BranchModel থেকে branchEmail গুলো বের করে আনা
  const branches = await BranchModel.find({
    companyEmail: employeeData.companyEmail,
  }).select("branchEmail");

  // branchEmail গুলো একটি অ্যারের মধ্যে রেখে দেওয়া
  const branchEmails = branches.map((branch) => branch.branchEmail);

  // EmployeeModel এ এই branchEmails দিয়ে কেবল সংখ্যাটি বের করা
  const employeeCount = await EmployeeModel.countDocuments({
    branchEmail: { $in: branchEmails },
  });

  if (userLimit <= employeeCount) {
    throw new AppError(httpStatus.BAD_REQUEST, "Employee Limit is Full");
  }

  const isEmployeeExits = await EmployeeModel.findOne({
    employeeEmail: employeeData.employeeEmail,
  });

  if (isEmployeeExits) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Employee Email is already exits!"
    );
  }

  // create a user object
  const userData: Partial<User> = {};

  userData.email = employeeData.employeeEmail;
  userData.password = password;
  userData.role = employeeData.employeeDesignation;
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

    // set employeeId
    employeeData.employeeId = await generateEmployeeId(
      employeeData.branchEmail
    );

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

const getAllEmployeeFromDB = async (email: string) => {
  const result = await EmployeeModel.find({
    branchEmail: { $eq: email },
  }).populate("userId");
  return result;
};

const getSingleEmployeeFromDB = async (email: string) => {

  const result = await EmployeeModel.findOne({
    employeeEmail: email,
  }).populate("userId");
  return result;
};

export const EmployeeServices = {
  createEmployeeIntoDB,
  getAllEmployeeFromDB,
  getSingleEmployeeFromDB
};
