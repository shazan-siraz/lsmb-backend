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
exports.MembershipControllers = void 0;
const membership_service_1 = require("./membership.service");
const createMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield membership_service_1.MembershipServices.createMembershipIntoDB(req.body);
        // send response
        res.status(200).json({
            success: true,
            message: "Membership is created successfully",
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
const getAllMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_service_1.MembershipServices.getAllMembershipFromDB();
    // send response
    res.status(200).json({
        success: true,
        message: "Membership are retrieve successfully",
        data: result,
    });
});
const getSingleMembership = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield membership_service_1.MembershipServices.getSingleMembershipFromDB(req.params.id);
    // send response
    res.status(200).json({
        success: true,
        message: "Membership is retrieve successfully",
        data: result,
    });
});
exports.MembershipControllers = {
    createMembership,
    getAllMembership,
    getSingleMembership
};
