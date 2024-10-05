"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    employeeId: { type: String, required: true },
    designation: { type: String, required: true },
    joiningDate: { type: String, required: true },
    employeeType: {
        type: String,
        enum: ["FullTime", "PartTime", "Sesonal", "Temporary"],
        required: true,
    },
    phoneNo: { type: Number, required: true },
    employeeEmail: { type: String, required: true },
    employeeNid: { type: Number, required: true },
    address: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    degree: {
        type: String,
        enum: ["Five", "Eight", "SSC", "HSC", "Diploma", "Bachelors"],
        required: true,
    },
    basicSalary: { type: Number, required: true },
    mobileBill: { type: Number, required: true },
    conveyanceAllowance: { type: Number, required: true },
    medicalAllowance: { type: Number, required: true },
    houseRent: { type: Number, required: true },
    incentiveBonus: { type: Number, required: true },
    others: { type: Number, required: true },
    professionalTax: { type: Number, required: true },
    incomeTax: { type: Number, required: true },
    providentFund: { type: Number, required: true },
    totalSalary: { type: Number, required: true },
    imageUrl: { type: String, required: true },
});
exports.EmployeeModel = (0, mongoose_1.model)("Employee", employeeSchema);
