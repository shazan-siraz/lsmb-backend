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
exports.LoanControllers = void 0;
const loan_service_1 = require("./loan.service");
const createLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield loan_service_1.LoanServices.createLoanIntoDB(req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Loan is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const getAllLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield loan_service_1.LoanServices.getAllLoanFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: "Loan is retrieve successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const getPendingLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield loan_service_1.LoanServices.getPendingLoanFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: "Pending Loan is retrieve successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const getActiveLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield loan_service_1.LoanServices.getActiveLoanFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: "Active Loan is retrieve successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const updateLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield loan_service_1.LoanServices.updateLoanFromDB(req.body.id, req.body.status);
        // send response
        res.status(200).json({
            success: true,
            message: "Loan is updated successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
exports.LoanControllers = {
    createLoan,
    getAllLoan,
    getPendingLoan,
    getActiveLoan,
    updateLoan,
};
