"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DpsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dps_controller_1 = require("./dps.controller");
const router = express_1.default.Router();
router.post("/create-dps", dps_controller_1.DpsControllers.createDps);
router.get("/", dps_controller_1.DpsControllers.getAllDps);
exports.DpsRoutes = router;
