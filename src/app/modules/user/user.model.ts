import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { User, UserInterfaceModel } from "./user.interface";
import config from "../../config";

const UserSchema = new Schema<User, UserInterfaceModel>(
  {
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "manager", "fieldOfficer"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
    },
    isDeleted: { type: Boolean, default: false },
    passwordChangeAt: Date,
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// set '' after saving password
UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

UserSchema.statics.isUserExitsByEmail = async function (email: string) {
  return await UserModel.findOne({ email });
};

export const UserModel = model<User, UserInterfaceModel>("User", UserSchema);
