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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingWithdrawServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const membership_model_1 = __importDefault(require("../membership/membership.model"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const savingWithdraw_model_1 = require("./savingWithdraw.model");
const createSavingWithdrawIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // find membership
    const membership = yield membership_model_1.default.findById(payload.memberId);
    if (!membership) {
        throw new AppError_1.default(404, "Membership not found!");
    }
    const subtractTotalFromSavingAmount = Number(payload.withdrawAmount) + Number(payload.serviceCharge);
    const subtractFromSavingAmount = membership.accountBalance - subtractTotalFromSavingAmount;
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        // subtract membership account Banalce
        const updatedSavingAmount = yield membership_model_1.default.findByIdAndUpdate(payload.memberId, { $set: { accountBalance: subtractFromSavingAmount } }, { new: true, session } // Ensure session is passed here
        );
        if (!updatedSavingAmount) {
            throw new AppError_1.default(404, "not found");
        }
        // created saving transaction history
        const newSavingWithdraw = yield savingWithdraw_model_1.SavingWithdrawModel.create([payload], {
            session,
        });
        yield session.commitTransaction();
        return newSavingWithdraw;
    }
    catch (err) {
        yield session.abortTransaction();
        throw Error(err);
    }
    finally {
        session.endSession();
    }
});
const getAllSavingWithdrawFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield savingWithdraw_model_1.SavingWithdrawModel.find();
    return result;
});
exports.SavingWithdrawServices = {
    createSavingWithdrawIntoDB,
    getAllSavingWithdrawFromDB,
};
