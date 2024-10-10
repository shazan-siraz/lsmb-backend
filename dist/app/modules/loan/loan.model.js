"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanModel = void 0;
const mongoose_1 = require("mongoose");
const LoanSchema = new mongoose_1.Schema({
    memberOfApplying: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    loanNo: { type: String, required: true, unique: true },
    loanAmount: { type: Number, required: true },
    percentageOfInterest: { type: String, required: true },
    processFees: { type: Number },
    insurance: { type: Number },
    installmentMode: {
        numberOfInstallment: { type: Number },
        installType: {
            type: String,
            enum: ["Daily", "Weekly", "Monthly", "Yearly"],
            required: true,
        },
        totalReceivable: { type: String },
    },
    installmentAmount: { type: String, required: true },
    attachment: { type: String, required: true },
    loanType: {
        type: String,
        enum: [
            "Personal",
            "Payday",
            "DPS",
            "FDR",
            "Saving",
            "Card",
            "Home",
            "Car",
            "Business",
            "Gold",
            "Education",
            "Consumer",
            "Land",
        ],
        required: true,
    },
    guarantorUser: { type: String },
    gurantorMember: { type: String },
    loanGuarantor: {
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        nid: { type: Number, required: true },
        bankAc: { type: String },
        attDocument: { type: String },
    },
    status: {
        type: String,
        enum: ["Pending", "Active", "OverDue", "Completed"],
        required: true,
        default: "Pending",
    },
}, { timestamps: true });
exports.LoanModel = (0, mongoose_1.model)("Loan", LoanSchema);
