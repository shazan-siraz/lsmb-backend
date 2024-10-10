"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRoutes = void 0;
const express_1 = __importDefault(require("express"));
const group_controller_1 = require("./group.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post("/create-group", (0, auth_1.auth)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.manager), group_controller_1.groupController.createGroup);
router.get("/", (0, auth_1.auth)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.manager), group_controller_1.groupController.getAllGroup);
router.patch("/update-group", (0, auth_1.auth)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.manager), group_controller_1.groupController.updateGroup);
exports.groupRoutes = router;
