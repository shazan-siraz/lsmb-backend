"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingWithdrawRoutes = void 0;
const express_1 = __importDefault(require("express"));
const savingWithdraw_controller_1 = require("./savingWithdraw.controller");
const router = express_1.default.Router();
router.post("/create-savingWithdraw", savingWithdraw_controller_1.SavingWithdrawControllers.createSavingWithdrawTransaction);
router.get("/", savingWithdraw_controller_1.SavingWithdrawControllers.getAllSavingWithdrawTransaction);
exports.SavingWithdrawRoutes = router;
