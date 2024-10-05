"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModel = void 0;
const mongoose_1 = require("mongoose");
const BranchSchema = new mongoose_1.Schema({
    branchId: { type: String, required: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: "User",
    },
    branchName: { type: String, required: true },
    branchEmail: { type: String, required: true },
    branchMobile: { type: String, required: true },
    branchAddress: { type: String, required: true },
    registeredPackage: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "RegisterPackage",
        required: true,
    },
    isDeleted: { type: Boolean, required: true, default: false },
}, { timestamps: true });
exports.BranchModel = (0, mongoose_1.model)("Branch", BranchSchema);
