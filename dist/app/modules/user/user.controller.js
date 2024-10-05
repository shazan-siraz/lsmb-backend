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
exports.UserControllers = void 0;
const user_service_1 = require("./user.service");
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, admin: adminData } = req.body;
        const result = yield user_service_1.UserServices.createAdminIntoDB(password, adminData);
        // send response
        res.status(200).json({
            success: true,
            message: "Admin is created successfully",
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
const createBranch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, branch: branchData } = req.body;
        const result = yield user_service_1.UserServices.createBranchIntoDB(password, branchData);
        // send response
        res.status(200).json({
            success: true,
            message: "Branch is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
        // next();
    }
});
exports.UserControllers = {
    createAdmin,
    createBranch
};
