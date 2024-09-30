import { Model, Types } from "mongoose";

export type AdminName = {
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

export type Admin = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: AdminName;
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

