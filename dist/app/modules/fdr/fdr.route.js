"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FdrRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fdr_controller_1 = require("./fdr.controller");
const router = express_1.default.Router();
router.post("/create-fdr", fdr_controller_1.FdrControllers.createFdr);
router.get("/", fdr_controller_1.FdrControllers.getAllFdr);
exports.FdrRoutes = router;
