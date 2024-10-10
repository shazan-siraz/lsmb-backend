"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const branch_controller_1 = require("./branch.controller");
const router = express_1.default.Router();
router.get("/", branch_controller_1.BranchControllers.getAllBranch);
exports.BranchRoutes = router;
