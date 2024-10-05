"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingTransactionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const savingTransaction_controller_1 = require("./savingTransaction.controller");
const router = express_1.default.Router();
router.post("/create-savingTransaction", savingTransaction_controller_1.SavingTransactionControllers.createSavingTransaction);
router.get("/", savingTransaction_controller_1.SavingTransactionControllers.getAllSavingTransaction);
exports.SavingTransactionRoutes = router;
