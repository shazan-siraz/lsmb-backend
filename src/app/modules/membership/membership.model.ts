import { model, Schema, Types } from "mongoose";
import { Membership } from "./membership.interface";

const MembershipSchema = new Schema<Membership>(
  {
    memberName: { type: String, required: true },
    memberId: { type: Number, required: true },
    branchEmail: { type: String, required: true },
    group: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
    assignFieldOfficer: { type: Schema.Types.ObjectId, required: true, ref: "Employee" },
    phoneNo: { type: Number, required: true },
    email: { type: String, required: true },
    memberNid: { type: Number, required: true },
    admissionFees: { type: Number },
    shareAmount: { type: String },
    dateOfBirth: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    fatherHusbandName: { type: String, required: true },
    profession: { type: String, required: true },
    religion: {
      type: String,
      enum: [
        "muslim",
        "hindu",
        "buddhist",
        "christian",
        "chakma",
        "marma",
        "others",
      ],
      required: true,
    },
    district: { type: String, required: true },
    thana: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String },
    status: { type: String, enum: ["enable", "disable"], required: true },
    accountBalance: { type: Number, required: true },
    memberPhoto: { type: String, required: true },
    signature: { type: String, required: true },
    passportOrNid: { type: String, required: true },
    chequeBook: { type: String, required: true },
    referenceEmployee: { type: Schema.Types.ObjectId, ref: "Employee" },
    referenceMember: { type: Schema.Types.ObjectId, ref: "Membership" },
    nominee: {
      nomineeName: { type: String, required: true },
      nomineePhone: { type: Number, required: true },
      nomineeNid: { type: Number, required: true },
      nomineeRelation: { type: String, required: true },
      distributation: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

const MembershipModel = model("Membership", MembershipSchema);

export default MembershipModel;
