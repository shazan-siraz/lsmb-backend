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
exports.UserServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const admin_model_1 = require("../admin/admin.model");
const branch_model_1 = require("../branch/branch.model");
const createAdminIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    userData.id = payload.id;
    userData.email = payload.email;
    userData.password = password;
    userData.role = "admin";
    userData.status = "in-progress";
    userData.isDeleted = false;
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        // create a user (transaction-1)
        const newUser = yield user_model_1.UserModel.create([userData], { session }); // array
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create user");
        }
        // set id , _id as user
        // payload.id = newUser[0].id;
        payload.user = newUser[0]._id; //reference _id
        // create a Admin (transaction-2)
        const newAdmin = yield admin_model_1.AdminModel.create([payload], { session });
        if (!newAdmin.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create Admin");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newAdmin;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
const createBranchIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    userData.id = payload.branchId;
    userData.email = payload.branchEmail;
    userData.password = password;
    userData.role = "manager";
    userData.status = "in-progress";
    userData.isDeleted = false;
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        // create a user (transaction-1)
        const newUser = yield user_model_1.UserModel.create([userData], { session }); // array
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create user");
        }
        // set id , _id as user
        // payload.id = newUser[0].id;
        payload.user = newUser[0]._id; //reference _id
        // create a Admin (transaction-2)
        const newBranch = yield branch_model_1.BranchModel.create([payload], { session });
        if (!newBranch.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create Branch");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newBranch;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
exports.UserServices = {
    createAdminIntoDB,
    createBranchIntoDB,
};
