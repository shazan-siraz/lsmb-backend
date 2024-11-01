import { model, Schema } from "mongoose";
import { SuperAdmin, SuperAdminName } from "./superAdmin.interface";

const SuperAdminNameSchema = new Schema<SuperAdminName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
});

export const GenderSchema = ["male", "female", "other"];

const SuperAdminSchema = new Schema<SuperAdmin>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    name: SuperAdminNameSchema,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    bloogGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    profileImg: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const SuperAdminModel = model<SuperAdmin>(
  "SuperAdmin",
  SuperAdminSchema
);