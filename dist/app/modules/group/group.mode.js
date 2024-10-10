"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModel = void 0;
const mongoose_1 = require("mongoose");
const groupSchema = new mongoose_1.Schema({
    groupCode: { type: Number, required: true },
    groupTitle: { type: String, required: true },
}, { timestamps: true });
exports.GroupModel = (0, mongoose_1.model)("Group", groupSchema);
