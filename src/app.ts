import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { groupRoutes } from "./app/modules/group/group.route";
import { MemberShipRoutes } from "./app/modules/membership/membership.route";
import { LoanRoutes } from "./app/modules/loan/loan.route";
import { DpsRoutes } from "./app/modules/dps/dps.route";
import { FdrRoutes } from "./app/modules/fdr/employee.route";
import { SavingTransactionRoutes } from "./app/modules/savingTransaction/savingTransaction.route";
import { SavingWithdrawRoutes } from "./app/modules/savingWithdraw/savingWithdraw.route";
import { AdminRoutes } from "./app/modules/admin/admin.route";
import { AuthRoutes } from "./app/modules/auth/auth.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorhandler"; // Custom global error handler
import notFound from "./app/middlewares/notFound"; // 404 error handler
import { RegisterPackageRoutes } from "./app/modules/registerPackage/registerPackage.route";
import { BranchRoutes } from "./app/modules/branch/branch.route";
import { EmployeeRoutes } from "./app/modules/employee/employee.route";
import { SuperAdminRoutes } from "./app/modules/superAdmin/superAdmin.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

// application route
app.use("/api/v1/registerPackage", RegisterPackageRoutes);
app.use("/api/v1/branch", BranchRoutes);
app.use("/api/v1/groups", groupRoutes);
app.use("/api/v1/membership", MemberShipRoutes);
app.use("/api/v1/loan", LoanRoutes);
app.use("/api/v1/dps", DpsRoutes);
app.use("/api/v1/fdr", FdrRoutes);
app.use("/api/v1/savingTransaction", SavingTransactionRoutes);
app.use("/api/v1/savingWithdraw", SavingWithdrawRoutes);
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/superAdmin", SuperAdminRoutes);
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/employee", EmployeeRoutes);

// Check if the server is running
app.get("/", (req: Request, res: Response) => {
  res.send("LSMB Server is running");
});

// Not Found middleware (optional but helpful for unhandled routes)
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;


