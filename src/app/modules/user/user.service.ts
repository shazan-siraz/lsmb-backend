import mongoose from "mongoose";
import { Admin } from "../admin/admin.interface";
import { User } from "./user.interface";
import { UserModel } from "./user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { AdminModel } from "../admin/admin.model";
import { Branch } from "../branch/branch.interface";
import { BranchModel } from "../branch/branch.model";
import { SuperAdminModel } from "../superAdmin/superAdmin.model";
import { Company } from "../company/company.interface";


const createSuperAdminIntoDB = async (password: string, payload: Admin) => {
  // create a user object
  const userData: Partial<User> = {};

  userData.userId = payload.id;
  userData.email = payload.email;
  userData.password = password;
  userData.role = "superAdmin";
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

    // set id , _id as user
    // payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a Super Admin (transaction-2)
    const newSuperAdmin = await SuperAdminModel.create([payload], { session });

    if (!newSuperAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Super Admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newSuperAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createAdminIntoDB = async (password: string, payload: Admin) => {
  // create a user object
  const userData: Partial<User> = {};

  userData.userId = payload.id;
  userData.email = payload.email;
  userData.password = password;
  userData.role = "admin";
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

    // set id , _id as user
    // payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a Admin (transaction-2)
    const newAdmin = await AdminModel.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createBranchIntoDB = async (password: string, payload: Branch) => {
  // create a user object
  const userData: Partial<User> = {};

  userData.userId = payload.branchId;
  userData.email = payload.branchEmail;
  userData.password = password;
  userData.role = "manager";
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

    // set id , _id as user
    // payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a Admin (transaction-2)
    const newBranch = await BranchModel.create([payload], { session });

    if (!newBranch.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Branch");
    }

    await session.commitTransaction();
    await session.endSession();

    return newBranch;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createCompanyIntoDB = async (password: string, payload: Company) => {
  // create a user object
  const userData: Partial<User> = {};

  userData.userId = payload.branchId;
  userData.email = payload.branchEmail;
  userData.password = password;
  userData.role = "manager";
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

    // set id , _id as user
    // payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a Admin (transaction-2)
    const newBranch = await BranchModel.create([payload], { session });

    if (!newBranch.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Branch");
    }

    await session.commitTransaction();
    await session.endSession();

    return newBranch;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createAdminIntoDB,
  createBranchIntoDB,
  createSuperAdminIntoDB
};
