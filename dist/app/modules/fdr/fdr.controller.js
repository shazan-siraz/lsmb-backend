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
exports.FdrControllers = void 0;
const fdr_service_1 = require("./fdr.service");
const createFdr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield fdr_service_1.FdrServices.createFdrIntoDB(req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Fdr is created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
const getAllFdr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fdr_service_1.FdrServices.getAllFdrFromDB();
    // send response
    res.status(200).json({
        success: true,
        message: "Fdr are retrieve successfully",
        data: result,
    });
});
exports.FdrControllers = {
    createFdr,
    getAllFdr,
};
