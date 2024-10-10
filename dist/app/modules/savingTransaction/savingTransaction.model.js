"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingTransactionModel = void 0;
const mongoose_1 = require("mongoose");
const SavingTransactionSchema = new mongoose_1.Schema({
    memberId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
    dateOfCollection: { type: String, required: true },
    savingAmount: { type: Number, required: true },
    savingTransactionInfo: { type: String },
}, { timestamps: true });
exports.SavingTransactionModel = (0, mongoose_1.model)("SavingTransaction", SavingTransactionSchema);
