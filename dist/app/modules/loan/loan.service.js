"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanServices = void 0;
const loan_model_1 = require("./loan.model");
const createLoanIntoDB = (loanData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield loan_model_1.LoanModel.create(loanData);
    return result;
});
const getAllLoanFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield loan_model_1.LoanModel.find().populate("memberOfApplying");
    return result;
});
const getPendingLoanFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield loan_model_1.LoanModel.find({ status: { $ne: "Active" } }).populate("memberOfApplying");
    return result;
});
const getActiveLoanFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield loan_model_1.LoanModel.find({ status: { $eq: "Active" } }).populate("memberOfApplying");
    return result;
});
const updateLoanFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield loan_model_1.LoanModel.findByIdAndUpdate({ _id: id }, { $set: { status: payload } }, { new: true });
    return result;
});
exports.LoanServices = {
    createLoanIntoDB,
    getAllLoanFromDB,
    getPendingLoanFromDB,
    getActiveLoanFromDB,
    updateLoanFromDB
};
