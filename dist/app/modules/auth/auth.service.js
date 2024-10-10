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
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const loginUserfromDB = (logindata) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the user is exits
    // const isUserExits = await UserModel.findOne({ email: logindata?.email });
    // if (!isUserExits) {
    //   throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    // }
    // checking if the user is exits
    const userData = yield user_model_1.UserModel.isUserExitsByEmail(logindata === null || logindata === void 0 ? void 0 : logindata.email);
    if (!userData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
    }
    // checking if the user is deleted
    const isDeleted = userData === null || userData === void 0 ? void 0 : userData.isDeleted;
    if (isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is deleted!");
    }
    // checking if the user is blocked
    const userStatus = userData === null || userData === void 0 ? void 0 : userData.status;
    if (userStatus === "blocked") {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is blocked!");
    }
    // checking if the password is correct
    const isPassswordMatched = yield bcrypt_1.default.compare(logindata === null || logindata === void 0 ? void 0 : logindata.password, userData === null || userData === void 0 ? void 0 : userData.password);
    if (!isPassswordMatched) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password do not matched!");
    }
    // create token and send to the client
    const jwtPayload = {
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: config_1.default.jwt_access_expires_in,
    });
    const refreshToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_refresh_secret, {
        expiresIn: config_1.default.jwt_refresh_expires_in,
    });
    return {
        accessToken,
        refreshToken,
    };
});
const changePasswordFromDB = (userData, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the user is exits
    const isUserExits = yield user_model_1.UserModel.isUserExitsByEmail(userData === null || userData === void 0 ? void 0 : userData.email);
    if (!isUserExits) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
    }
    // checking if the user is deleted
    const isDeleted = isUserExits === null || isUserExits === void 0 ? void 0 : isUserExits.isDeleted;
    if (isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is deleted!");
    }
    // checking if the user is blocked
    const userStatus = isUserExits === null || isUserExits === void 0 ? void 0 : isUserExits.status;
    if (userStatus === "blocked") {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is blocked!");
    }
    // checking if the password is correct
    const isPassswordMatched = yield bcrypt_1.default.compare(payload === null || payload === void 0 ? void 0 : payload.oldPassword, isUserExits === null || isUserExits === void 0 ? void 0 : isUserExits.password);
    if (!isPassswordMatched) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password do not matched!");
    }
    // hash new password
    const newHashedPassword = yield bcrypt_1.default.hash(payload === null || payload === void 0 ? void 0 : payload.newPassword, Number(config_1.default.bcrypt_salt_rounds));
    const result = yield user_model_1.UserModel.findOneAndUpdate({ email: userData === null || userData === void 0 ? void 0 : userData.email }, { password: newHashedPassword, passwordChangeAt: new Date() });
    return result;
});
const refreshTokenFromService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // if the token is nothig
    if (!token) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Token not found!");
    }
    // if the token is valid
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_secret);
    const { role, email, iat } = decoded;
    // checking if the user is exits
    const userData = yield user_model_1.UserModel.isUserExitsByEmail(email);
    if (!userData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
    }
    // checking if the user is deleted
    const isDeleted = userData === null || userData === void 0 ? void 0 : userData.isDeleted;
    if (isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is deleted!");
    }
    // checking if the user is blocked
    const userStatus = userData === null || userData === void 0 ? void 0 : userData.status;
    if (userStatus === "blocked") {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "This user is blocked!");
    }
    if (userData.passwordChangeAt &&
        user_model_1.UserModel.isJWTIssuedBeforePasswordChanged(userData.passwordChangeAt, iat)) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    }
    // create token and send to the client
    const jwtPayload = {
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: config_1.default.jwt_access_expires_in,
    });
    return {
        accessToken,
    };
});
exports.AuthServices = {
    loginUserfromDB,
    changePasswordFromDB,
    refreshTokenFromService,
};
