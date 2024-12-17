import { Types } from "mongoose";

export type Loan = {
  memberOfApplying: Types.ObjectId;
  memberId: string;
  memberName: string;
  memberPhone: string;
  branchEmail: string;
  companyEmail: string;
  startDate: string;
  endDate: string;
  loanNo: string;
  loanAmount: number;
  percentageOfInterest: number;
  processFees?: number;
  insurance?: number;
  installmentMode: {
    numberOfInstallment?: number;
    installType: "Daily" | "Weekly" | "Monthly" | "Yearly";
    totalReceivable?: string;
  };
  installmentAmount?: string;
  interestAmount?: string;
  attachment: string[];
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
  loanGuarantor: [
    {
      name: string;
      phone: number;
      nid: number;
      bankAccount?: string;
    }
  ];
  status: "Pending" | "Active" | "OverDue" | "Completed";
  isDeleted: boolean;
};
