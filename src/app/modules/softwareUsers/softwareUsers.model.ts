import { model, Schema } from "mongoose";
import { SoftwareUsers } from "./softwareUsers.interface";

const SoftwareUsersSchema = new Schema<SoftwareUsers>(
  {
    softwareUsersLogo: { type: String, required: true },
    softwareUsersName: { type: String, required: true },
    softwareUsersAddress: { type: String, required: true },
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

export const SoftwareUsersModel = model("softwareUsers", SoftwareUsersSchema);


