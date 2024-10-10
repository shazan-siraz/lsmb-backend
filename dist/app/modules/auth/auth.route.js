"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const user_constant_1 = require("../user/user.constant");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
router.post("/login", auth_controller_1.AuthControllers.loginUser);
router.post("/change-password", (0, auth_1.auth)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.manager, user_constant_1.USER_ROLE.fieldOfficer), auth_controller_1.AuthControllers.changePassword);
router.post("/refresh-token", auth_controller_1.AuthControllers.refreshToken);
exports.AuthRoutes = router;
