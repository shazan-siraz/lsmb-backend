import { Types } from "mongoose";
import { RegisteredPackage } from "../registerPackage/registerPackage.interface";

export type Company = {
  companyName: string;
  companyEmail: string;
  user: Types.ObjectId;
  companyMobile: string;
  companyAddress: string;
  registeredPackage: RegisteredPackage | Types.ObjectId;
  profileImage: string;
  status: "Enable" | "Disable";
  isDeleted: boolean;
};

