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
exports.AuthControllers = void 0;
const auth_service_1 = require("./auth.service");
const config_1 = __importDefault(require("../../config"));
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.loginUserfromDB(req.body);
        const { refreshToken, accessToken } = result;
        res.cookie("refreshToken", refreshToken, {
            secure: config_1.default.NODE_ENV === "production",
            httpOnly: true,
        });
        // send response
        res.status(200).json({
            success: true,
            message: "User is logged in successfully",
            data: { accessToken },
        });
    }
    catch (err) {
        next(err);
    }
});
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.changePasswordFromDB(req.user, req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Password is updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const refreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken } = req.cookies;
        const result = yield auth_service_1.AuthServices.refreshTokenFromService(refreshToken);
        // send response
        res.status(200).json({
            success: true,
            message: "Access token is retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.AuthControllers = {
    loginUser,
    changePassword,
    refreshToken,
};
