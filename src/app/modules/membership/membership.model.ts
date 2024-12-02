import { model, Schema, Types } from "mongoose";
import { Membership } from "./membership.interface";

const MembershipSchema = new Schema<Membership>(
  {
    memberId: { type: Number, required: true },
    branchEmail: { type: String, required: true },
    companyEmail: { type: String, required: true },
    branch: { type: Schema.Types.ObjectId, required: true, ref: "Branch" },
    memberName: { type: String, required: true },
    group: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
    assignFieldOfficer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
    phoneNo: { type: String, required: true },
    email: { type: String },
    memberNid: { type: String, required: true },
    admissionFees: { type: Number },
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
    accountBalance: { type: Number, required: true },
    memberPhoto: { type: String, required: true },
    signature: { type: String, required: true },
    nidFrontPart: { type: String, required: true },
    nidBackPart: { type: String, required: true },
    referenceEmployee: { type: Schema.Types.ObjectId, ref: "Employee" },
    referenceMember: { type: Schema.Types.ObjectId, ref: "Membership" },
    attachments: { type: [String] },
    nominee: [{
      nomineeName: { type: String, required: true },
      nomineePhone: { type: Number, required: true },
      nomineeNid: { type: Number, required: true },
      nomineeRelation: { type: String, required: true },
      distributation: { type: Number, required: true },
    }],
    status: {
      type: String,
      enum: ["Enable", "Disable"],
      default: "Enable",
      required: true,
    },
    isDeleted: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

const MembershipModel = model("Membership", MembershipSchema);

export default MembershipModel;
