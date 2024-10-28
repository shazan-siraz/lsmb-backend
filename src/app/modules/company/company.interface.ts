import { Types } from "mongoose";

export type Company = {
  companyName: string;
  companyEmail: string;
  user: Types.ObjectId;
  companyMobile: string;
  companyAddress: string;
  registeredPackage: Types.ObjectId;
  status: "Enable" | "Disable";
  isDeleted: boolean;
};

