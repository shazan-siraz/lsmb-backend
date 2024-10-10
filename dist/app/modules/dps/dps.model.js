"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DpsModel = void 0;
const mongoose_1 = require("mongoose");
const DpsSchema = new mongoose_1.Schema({
    memberOfApplying: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
        required: true,
    },
    dpsStart: { type: String, required: true },
    dpsAcNo: { type: String, required: true },
    startingBalance: { type: Number, required: true },
    durationOfYear: { type: String, required: true },
    installmentType: { type: String, required: true },
    returnInterest: { type: String, required: true },
    returnAmount: { type: Number, required: true },
    referenceUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Employee",
    },
    referenceMember: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Membership",
    },
});
exports.DpsModel = (0, mongoose_1.model)("Dps", DpsSchema);
