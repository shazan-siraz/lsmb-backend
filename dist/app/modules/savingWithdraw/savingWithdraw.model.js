"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingWithdrawModel = void 0;
const mongoose_1 = require("mongoose");
const SavingWithdrawSchema = new mongoose_1.Schema({
    memberId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
    dateOfWithdraw: { type: String, required: true },
    mrSlipNo: { type: String, required: true },
    withdrawAmount: { type: Number, required: true },
    serviceCharge: { type: Number, required: true },
    totalPayableAmount: { type: Number, required: true },
    withdrawTransactionInfo: { type: String, required: true },
}, { timestamps: true });
exports.SavingWithdrawModel = (0, mongoose_1.model)("SavingWithdraw", SavingWithdrawSchema);
