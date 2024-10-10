"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberShipRoutes = void 0;
const express_1 = __importDefault(require("express"));
const membership_controller_1 = require("./membership.controller");
const router = express_1.default.Router();
router.post("/create-membership", membership_controller_1.MembershipControllers.createMembership);
router.get("/", membership_controller_1.MembershipControllers.getAllMembership);
router.get("/single-membership/:id", membership_controller_1.MembershipControllers.getSingleMembership);
exports.MemberShipRoutes = router;
