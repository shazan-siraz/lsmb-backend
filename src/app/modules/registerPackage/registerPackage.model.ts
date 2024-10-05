import { model, Schema, Types } from "mongoose";
import { RegisterPackage } from "./registerPackage.interface";

const RegisterPackageSchema = new Schema<RegisterPackage>(
  {
    packageId: { type: Number, required: true, unique: true },
    packageName: { type: String, required: true },
    packagePrice: { type: Number, required: true },
    memberLimit: { type: Number, required: true },
    branchLimit: { type: Number, required: true },
    userLimit: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const RegisterPackageModel = model("RegisterPackage", RegisterPackageSchema);

export default RegisterPackageModel;
