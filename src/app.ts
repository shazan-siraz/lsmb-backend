import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { groupRoutes } from "./app/modules/group/group.route";
import { MemberShipRoutes } from "./app/modules/membership/membership.route";
import { LoanRoutes } from "./app/modules/loan/loan.route";
import { DpsRoutes } from "./app/modules/dps/dps.route";
import { FdrRoutes } from "./app/modules/fdr/fdr.route";
import { SavingTransactionRoutes } from "./app/modules/savingTransaction/savingTransaction.route";
import { SavingWithdrawRoutes } from "./app/modules/savingWithdraw/savingWithdraw.route";
import { AdminRoutes } from "./app/modules/admin/admin.route";
import { AuthRoutes } from "./app/modules/auth/auth.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorhandler"; // Custom global error handler
import notFound from "./app/middlewares/notFound"; // 404 error handler
import { BranchRoutes } from "./app/modules/branch/branch.route";
import { EmployeeRoutes } from "./app/modules/employee/employee.route";
import { SuperAdminRoutes } from "./app/modules/superAdmin/superAdmin.route";
import { VideoTutorialRoutes } from "./app/modules/videoTutorial/videoTutorial.route";
import { SoftwareUsersRoutes } from "./app/modules/softwareUsers/softwareUsers.route";
import { ArticleRoutes } from "./app/modules/article/article.route";
import { CompanyRoutes } from "./app/modules/company/company.route";
import { LoanCollectionRoutes } from "./app/modules/loanCollection/loanCollection.route";
import { PackageRoutes } from "./app/modules/package/package.route";
import { DpsCollectionRoutes } from "./app/modules/dpsCollection/dpsCollection.route";

const app: Application = express();

const corsOptions = {
  origin: ["https://softbankbd.com", "http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};


// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// application route
app.use("/api/v1/package", PackageRoutes);
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
app.use("/api/v1/videoTutorial", VideoTutorialRoutes);
app.use("/api/v1/softwareUsers", SoftwareUsersRoutes);
app.use("/api/v1/article", ArticleRoutes);
app.use("/api/v1/company", CompanyRoutes);
app.use("/api/v1/loanCollection", LoanCollectionRoutes);
app.use("/api/v1/dpsCollection", DpsCollectionRoutes);

// Check if the server is running
app.get("/", (req: Request, res: Response) => {
  res.send("SoftbankBD Server is running");
});

// Not Found middleware (optional but helpful for unhandled routes)
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;

