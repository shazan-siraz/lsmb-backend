import { Types } from "mongoose";

export type Loan = {
  memberOfApplying: Types.ObjectId;
  branchEmail: string;
  startDate: string;
  endDate: string;
  loanNo: string;
  loanAmount: number;
  percentageOfInterest: string;
  processFees?: number;
  insurance?: number;
  installmentMode: {
    numberOfInstallment?: number;
    installType: "Daily" | "Weekly" | "Monthly" | "Yearly";
    totalReceivable?: string;
  };
  installmentAmount: string;
  attachment: string;
  loanType:
    | "Personal"
    | "Payday"
    | "DPS"
    | "FDR"
    | "Saving"
    | "Card"
    | "Home"
    | "Car"
    | "Business"
    | "Gold"
    | "Education"
    | "Consumer"
    | "Land";
  guarantorEmployee?: Types.ObjectId;
  gurantorMember?: Types.ObjectId;
  loanGuarantor: {
    name: string;
    phone: number;
    nid: number;
    bankAc?: string;
    attDocument?: string;
  };
  status: "Pending" | "Active" | "OverDue" | "Completed";
};
