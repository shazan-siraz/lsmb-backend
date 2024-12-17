import { EmployeeModel } from "../modules/employee/employee.model";
import { LoanModel } from "../modules/loan/loan.model";
import MembershipModel from "../modules/membership/membership.model";

const findLastEmployeeId = async (branchEmail: string) => {
  const lastEmployee = await EmployeeModel.findOne(
    { branchEmail: branchEmail },
    { employeeId: 1, _id: 0 } // Corrected projection
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastEmployee?.employeeId ? lastEmployee.employeeId : undefined;
};

export const generateEmployeeId = async (email: string) => {
  let currentId = 0;
  const lastEmployeeId = await findLastEmployeeId(email);

  if (lastEmployeeId) {
    currentId = lastEmployeeId;
  }

  const incrementId = currentId + 1;

  return incrementId;
};

const findLastMemberId = async (branchEmail: string) => {
  const lastMember = await MembershipModel.findOne(
    { branchEmail: branchEmail },
    { memberId: 1, _id: 0 } // Corrected projection
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastMember?.memberId ? lastMember.memberId : undefined;
};

export const generateMemberId = async (email: string) => {
  let currentId = 1000;
  const lastMemberId = await findLastMemberId(email);

  if (lastMemberId) {
    currentId = Number(lastMemberId);
  }

  const incrementId = currentId + 1;

  return incrementId.toString();
};

const generateUniqueTxnId = () => {
  const prefix = "TXN"; // Fixed prefix
  const timestamp = Date.now().toString(36).toUpperCase(); // Base36 encoded timestamp
  const randomPart = generateRandomString(10); // Random alphanumeric string

  return `${prefix}-${timestamp}-${randomPart}`;
};

const generateRandomString = (length: any) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

const findLastLoanNo = async (branchEmail: string) => {
  const lastLoanNo = await LoanModel.findOne({
    branchEmail: branchEmail,
  }).sort({ createdAt: -1 });

  return lastLoanNo?.loanNo ? lastLoanNo?.loanNo : "LOAN-1000";
};

export const generateNewLoanNo = async (email: string) => {
  const lastLoanNo = await findLastLoanNo(email);

  // স্ট্রিং-এর সংখ্যা অংশ আলাদা করা
  const parts = lastLoanNo.split("-");
  const prefix = parts[0]; // "LOAN"
  const number = parseInt(parts[1], 10); // "1002" -> 1002

  // সংখ্যা অংশ ইনক্রিমেন্ট করা
  const incrementedNumber = number + 1;

  // নতুন স্ট্রিং তৈরি করা
  const newLoanId = `${prefix}-${incrementedNumber
    .toString()
    .padStart(4, "0")}`;

  return newLoanId;
};

