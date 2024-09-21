import { Schema, model } from "mongoose";
import { Employee } from "./employee.interface";

const employeeSchema = new Schema<Employee>({
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

export const EmployeeModel = model<Employee>("Employee", employeeSchema);
