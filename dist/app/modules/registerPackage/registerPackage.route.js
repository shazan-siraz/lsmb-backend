"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPackageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const registerPackage_controller_1 = require("./registerPackage.controller");
const router = express_1.default.Router();
router.post("/create-registerPackage", registerPackage_controller_1.RegisterPackageControllers.createRegisterPackage);
router.get("/", registerPackage_controller_1.RegisterPackageControllers.getAllRegisterPackage);
exports.RegisterPackageRoutes = router;
