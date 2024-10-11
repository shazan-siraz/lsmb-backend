import { model, Schema } from "mongoose";
import { Loan } from "./loan.interface";

const LoanSchema = new Schema<Loan>(
  {
    memberOfApplying: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
      required: true,
    },
    branchEmail: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    loanNo: { type: String, required: true, unique: true },
    loanAmount: { type: Number, required: true },
    percentageOfInterest: { type: String, required: true },
    processFees: { type: Number },
    insurance: { type: Number },
    installmentMode: {
      numberOfInstallment: { type: Number },
      installType: {
        type: String,
        enum: ["Daily", "Weekly", "Monthly", "Yearly"],
        required: true,
      },
      totalReceivable: { type: String },
    },
    installmentAmount: { type: String, required: true },
    attachment: { type: String, required: true },
    loanType: {
      type: String,
      enum: [
        "Personal",
        "Payday",
        "DPS",
        "FDR",
        "Saving",
        "Card",
        "Home",
        "Car",
        "Business",
        "Gold",
        "Education",
        "Consumer",
        "Land",
      ],
      required: true,
    },
    guarantorEmployee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
    gurantorMember: {
      type: Schema.Types.ObjectId,
      ref: "Membership",
    },
    loanGuarantor: {
      name: { type: String, required: true },
      phone: { type: Number, required: true },
      nid: { type: Number, required: true },
      bankAc: { type: String },
      attDocument: { type: String },
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "OverDue", "Completed"],
      required: true,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const LoanModel = model("Loan", LoanSchema);
