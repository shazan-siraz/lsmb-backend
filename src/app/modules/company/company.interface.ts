import { Types } from "mongoose";
import { Package } from "../package/package.interface";


export type Company = {
  companyName: string;
  companyEmail: string;
  user: Types.ObjectId;
  companyMobile: string;
  companyAddress: string;
  registeredPackage: Package | Types.ObjectId;
  profileImage: string;
  status: "Enable" | "Disable";
  isDeleted: boolean;
};

