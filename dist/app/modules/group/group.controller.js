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
exports.groupController = void 0;
const group_service_1 = require("./group.service");
const createGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield group_service_1.groupServices.createGroupIntoDB(req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Group is created successfully",
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
const updateGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        const updateData = {
            groupCode: req.body.groupCode,
            groupTitle: req.body.groupTitle,
        };
        const result = yield group_service_1.groupServices.updateGroupIntoDB(_id, updateData);
        // send response
        res.status(200).json({
            success: true,
            message: "Group is updated successfully",
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
const getAllGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield group_service_1.groupServices.getAllGroup();
        // send response
        res.status(200).json({
            success: true,
            message: "Group are retrieve successfully",
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
exports.groupController = {
    createGroup,
    updateGroup,
    getAllGroup,
};
