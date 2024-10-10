"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = exports.GenderSchema = void 0;
const mongoose_1 = require("mongoose");
const AdminNameSchema = new mongoose_1.Schema({
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
exports.GenderSchema = ["male", "female", "other"];
const AdminSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: "User",
    },
    name: AdminNameSchema,
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
}, { timestamps: true });
exports.AdminModel = (0, mongoose_1.model)("Admin", AdminSchema);
