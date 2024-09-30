import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { UserModel } from "../user/user.model";
import { User } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";

const loginUserfromDB = async (logindata: User) => {
  // checking if the user is exits
  // const isUserExits = await UserModel.findOne({ email: logindata?.email });

  // if (!isUserExits) {
  //   throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
  // }

  // checking if the user is exits
  const userData = await UserModel.isUserExitsByEmail(logindata?.email);

  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
  }

  // checking if the user is deleted
  const isDeleted = userData?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted!");
  }

  // checking if the user is blocked
  const userStatus = userData?.status;

  if (userStatus === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked!");
  }

  // checking if the password is correct
  const isPassswordMatched = await bcrypt.compare(
    logindata?.password,
    userData?.password
  );

  if (!isPassswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!");
  }

  // create token and send to the client
  const jwtPayload = {
    email: userData?.email,
    role: userData?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "10d",
  });

  return {
    accessToken,
  };
};

const changePasswordFromDB = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  // checking if the user is exits
  const isUserExits = await UserModel.isUserExitsByEmail(userData?.email);

  if (!isUserExits) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
  }

  // checking if the user is deleted
  const isDeleted = isUserExits?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted!");
  }

  // checking if the user is blocked
  const userStatus = isUserExits?.status;

  if (userStatus === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked!");
  }

  // checking if the password is correct
  const isPassswordMatched = await bcrypt.compare(
    payload?.oldPassword,
    isUserExits?.password
  );

  if (!isPassswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!");
  }

  // hash new password
  const newHashedPassword = await bcrypt.hash(
    payload?.newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await UserModel.findOneAndUpdate(
    { email: userData?.email },
    { password: newHashedPassword, passwordChangeAt: new Date() }
  );

  return result;
};

export const AuthServices = {
  loginUserfromDB,
  changePasswordFromDB,
};
