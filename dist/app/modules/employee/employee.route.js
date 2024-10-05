"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const employee_controller_1 = require("./employee.controller");
const router = express_1.default.Router();
router.post("/create-employee", employee_controller_1.employeeControllers.createEmployee);
router.get("/", employee_controller_1.employeeControllers.getAllEmployee);
exports.EmployeeRoutes = router;
