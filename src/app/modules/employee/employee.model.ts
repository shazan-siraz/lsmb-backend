import { model, Schema, Types } from "mongoose";
import { Employee } from "./employee.interface";

const EmployeeSchema = new Schema<Employee>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    employeeId: { type: Number, required: true },
    employeeEmail: { type: String, required: true, unique: true },
    branch: { type: Schema.Types.ObjectId, required: true, ref: "Branch" },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    employeeName: { type: String, required: true },
    joiningDate: { type: String, required: true },
    employeeType: {
      type: String,
      enum: ["fullTime", "partTime", "seasonal", "temporary"],
      required: true,
    },
    employeeDesignation: {
      type: String,
      enum: ["manager", "accountant", "fieldOfficer"],
      required: true,
    },
    phoneNo: { type: String, required: true },
    employeeNid: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    degree: { type: String, required: true },
    basicSalary: { type: Number, required: true },
    mobileBill: { type: Number, required: true },
    conveyanceAllowance: { type: Number, required: true },
    medicalAllowance: { type: Number, required: true },
    houseRent: { type: Number, required: true },
    incentiveBonus: { type: Number, required: true },
    others: { type: Number, default: 0 }, // Optional field
    professionalTax: { type: Number, required: true },
    incomeTax: { type: Number, required: true },
    providentFund: { type: Number, required: true },
    totalSalary: { type: Number, required: true },
    profileImage: { type: String, required: true },
    signature: { type: String, required: true },
    nidFirstPart: { type: String, required: true },
    nidSeconedPart: { type: String, required: true },
    attachments: { type: [String] },
    jabindar: {
      jabindarName: { type: String, required: true },
      jabindarPhone: { type: Number, required: true },
      jabindarNid: { type: String, required: true },
      jabindarSignature: { type: String, required: true },
      jabindarNidFirstPart: { type: String, required: true },
      jabindarNidSeconedPart: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);


export const EmployeeModel = model<Employee>("Employee", EmployeeSchema);
