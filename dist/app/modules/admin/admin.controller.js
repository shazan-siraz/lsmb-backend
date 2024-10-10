"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllers = void 0;
const admin_serveice_1 = require("./admin.serveice");
const getAllAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admin_serveice_1.AdminServices.getAllAdminFromDB();
    // send response
    res.status(200).json({
        success: true,
        message: "Admin are retrieve successfully",
        data: result,
    });
});
exports.AdminControllers = {
    getAllAdmin,
};
