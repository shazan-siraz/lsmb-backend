import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface User {
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "company" | "branch" | "manager" | "accountant" | "fieldOfficer";
  status: "in-progress" | "pending" | "blocked";
  isDeleted: boolean;
  passwordChangeAt?: Date;
}

export interface UserInterfaceModel extends Model<User> {
  // myStaticMethod(): number;

  isUserExitsByEmail(email: string): Promise<User>;

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
