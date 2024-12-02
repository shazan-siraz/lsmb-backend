import { Types } from "mongoose";

export type Membership = {
  memberId: number;
  branchEmail: string;
  companyEmail: string;
  branch: Types.ObjectId;
  memberName: string;
  group: Types.ObjectId;
  assignFieldOfficer: Types.ObjectId;
  phoneNo: string;
  email?: string;
  memberNid: string;
  admissionFees?: number;
  dateOfBirth: string;
  age: number;
  gender: "male" | "female" | "other";
  fatherHusbandName: string;
  profession: string;
  religion:
    | "muslim"
    | "hindu"
    | "buddhist"
    | "christian"
    | "chakma"
    | "marma"
    | "others";
  district: string;
  thana: string;
  presentAddress: string;
  permanentAddress?: string;
  accountBalance: number;
  memberPhoto: string;
  signature: string;
  nidFrontPart: string;
  nidBackPart: string;
  referenceEmployee?: Types.ObjectId;
  referenceMember?: Types.ObjectId;
  attachments?: string[];
  nominee: [{
    nomineeName: string;
    nomineePhone: number;
    nomineeNid: string;
    nomineeRelation: string;
    distributation: number;
  }];
  status: "Enable" | "Disable";
  isDeleted: boolean;
};
