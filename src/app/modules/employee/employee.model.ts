import { model, Schema } from "mongoose";
import { Employee } from "./employee.interface";

const EmployeeSchema = new Schema<Employee>(
  {
    employeeId: { type: String, required: true },
    employeeEmail: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    branchEmail: { type: String, required: true },
    employeeName: { type: String, required: true },
    joiningDate: { type: String, required: true },
    employeeType: { type: String, required: true },
    phoneNo: { type: String, required: true },
    employeeNid: { type: String, required: true },
    presentAddress: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    degree: { type: String, required: true },
    basicSalary: { type: Number, required: true },
    mobileBill: { type: Number, required: true },
    conveyanceAllowance: { type: Number, required: true },
    medicalAllowance: { type: Number, required: true },
    houseRent: { type: Number, required: true },
    incentiveBonus: { type: Number, required: true },
    others: { type: Number, required: true },
    professionalTax: { type: Number, required: true },
    providentFund: { type: Number, required: true },
    totalSalary: { type: Number, required: true },
    profileImage: { type: String, required: true },
  },
  { timestamps: true }
);

export const EmployeeModel = model<Employee>("Employee", EmployeeSchema);

