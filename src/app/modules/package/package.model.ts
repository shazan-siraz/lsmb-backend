import { model, Schema } from "mongoose";
import { Package } from "./package.interface";

const PackageSchema = new Schema<Package>(
  {
    packageName: { type: String, required: true },
    packagePrice: { type: Number, required: true },
    memberLimit: { type: Number, required: true },
    userLimit: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Enable", "Disable"],
      default: "Enable",
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const PackageModel = model("Package", PackageSchema);

export default PackageModel;
