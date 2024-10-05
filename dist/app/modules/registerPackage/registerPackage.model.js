"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RegisterPackageSchema = new mongoose_1.Schema({
    packageId: { type: Number, required: true, unique: true },
    packageName: { type: String, required: true },
    packagePrice: { type: Number, required: true },
    memberLimit: { type: Number, required: true },
    branchLimit: { type: Number, required: true },
    userLimit: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
}, { timestamps: true });
const RegisterPackageModel = (0, mongoose_1.model)("RegisterPackage", RegisterPackageSchema);
exports.default = RegisterPackageModel;
