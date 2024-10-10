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
exports.SavingWithdrawControllers = void 0;
const savingWithdraw_service_1 = require("./savingWithdraw.service");
const createSavingWithdrawTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield savingWithdraw_service_1.SavingWithdrawServices.createSavingWithdrawIntoDB(req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Saving Withdraw is created successfully",
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
const getAllSavingWithdrawTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield savingWithdraw_service_1.SavingWithdrawServices.getAllSavingWithdrawFromDB();
        // send response
        res.status(200).json({
            success: true,
            message: "Saving Withdraw is retrieve successfully",
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
exports.SavingWithdrawControllers = {
    createSavingWithdrawTransaction,
    getAllSavingWithdrawTransaction,
};
