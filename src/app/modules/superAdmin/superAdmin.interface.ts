import { Model, Types } from "mongoose";

export type SuperAdminName = {
  firstName: string;
  lastName: string;
};

export type Gender = "male" | "female" | "other";

export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type SuperAdmin = {
  user: Types.ObjectId;
  name: SuperAdminName;
  gender: Gender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  bloogGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
};

