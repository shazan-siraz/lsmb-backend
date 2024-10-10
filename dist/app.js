"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const employee_route_1 = require("./app/modules/employee/employee.route");
const group_route_1 = require("./app/modules/group/group.route");
const membership_route_1 = require("./app/modules/membership/membership.route");
const loan_route_1 = require("./app/modules/loan/loan.route");
const dps_route_1 = require("./app/modules/dps/dps.route");
const employee_route_2 = require("./app/modules/fdr/employee.route");
const savingTransaction_route_1 = require("./app/modules/savingTransaction/savingTransaction.route");
const savingWithdraw_route_1 = require("./app/modules/savingWithdraw/savingWithdraw.route");
const admin_route_1 = require("./app/modules/admin/admin.route");
const auth_route_1 = require("./app/modules/auth/auth.route");
const user_route_1 = require("./app/modules/user/user.route");
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler")); // Custom global error handler
const notFound_1 = __importDefault(require("./app/middlewares/notFound")); // 404 error handler
const registerPackage_route_1 = require("./app/modules/registerPackage/registerPackage.route");
const branch_route_1 = require("./app/modules/branch/branch.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ["http://localhost:5173"], credentials: true }));
// application route
app.use("/api/v1/registerPackage", registerPackage_route_1.RegisterPackageRoutes);
app.use("/api/v1/branch", branch_route_1.BranchRoutes);
app.use("/api/v1/employee", employee_route_1.EmployeeRoutes);
app.use("/api/v1/groups", group_route_1.groupRoutes);
app.use("/api/v1/membership", membership_route_1.MemberShipRoutes);
app.use("/api/v1/loan", loan_route_1.LoanRoutes);
app.use("/api/v1/dps", dps_route_1.DpsRoutes);
app.use("/api/v1/fdr", employee_route_2.FdrRoutes);
app.use("/api/v1/savingTransaction", savingTransaction_route_1.SavingTransactionRoutes);
app.use("/api/v1/savingWithdraw", savingWithdraw_route_1.SavingWithdrawRoutes);
app.use("/api/v1/admin", admin_route_1.AdminRoutes);
app.use("/api/v1/user", user_route_1.UserRoutes);
app.use("/api/v1/auth", auth_route_1.AuthRoutes);
// Check if the server is running
app.get("/", (req, res) => {
    res.send("LSMB Server is running");
});
// Not Found middleware (optional but helpful for unhandled routes)
app.use(notFound_1.default);
// Global Error Handler
app.use(globalErrorhandler_1.default);
exports.default = app;
