"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const loan_controller_1 = require("./loan.controller");
const router = express_1.default.Router();
router.post("/create-loan", loan_controller_1.LoanControllers.createLoan);
router.get("/", loan_controller_1.LoanControllers.getAllLoan);
router.get("/pending-loan", loan_controller_1.LoanControllers.getPendingLoan);
router.get("/active-loan", loan_controller_1.LoanControllers.getActiveLoan);
router.patch("/statusUpdate-loan", loan_controller_1.LoanControllers.updateLoan);
exports.LoanRoutes = router;
