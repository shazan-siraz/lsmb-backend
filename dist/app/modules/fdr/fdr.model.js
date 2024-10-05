"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FdrModel = void 0;
const mongoose_1 = require("mongoose");
const FdrSchema = new mongoose_1.Schema({
    memberOfFdrApplying: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
    FdrStart: { type: String, required: true },
    FdrAcNo: { type: String, required: true },
    FixedDepositAmount: { type: Number, required: true },
    durationOfYear: { type: String, required: true },
    revenueType: { type: String, required: true },
    returnInterest: { type: Number, required: true },
    interest: { type: Number, required: true },
    totalInterest: { type: Number, required: true },
    referenceEmployee: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    referenceMember: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
}, { timestamps: true });
exports.FdrModel = (0, mongoose_1.model)("Fdr", FdrSchema);
