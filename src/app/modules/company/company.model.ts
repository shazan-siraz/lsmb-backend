import { model, Schema } from "mongoose";
import { Company } from "./company.interface";

const CompanySchema = new Schema<Company>(
  {
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    companyMobile: { type: String, required: true },
    companyAddress: { type: String, required: true },
    registeredPackage: {
      type: Schema.Types.ObjectId,
      ref: "RegisterPackage",
      required: true,
    },
    status: { type: String, required: true, enum: ["Enable", "Disable"] },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const CompanyModel = model("Company", CompanySchema);
