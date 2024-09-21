import { Types } from "mongoose";

export type Membership = {
  memberName: string;
  memberId: number;
  groupName: string;
  assignFieldUser: string;
  phoneNo: number;
  email: string;
  memberNid: number;
  admissionFees?: number;
  shareAmount?: string;
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
  status: "enable" | "disable";
  accountBalance: number;
  memberPhoto: string;
  signature: string;
  passportOrNid: string;
  chequeBook: string;
  referenceUser?: string;
  referenceMember?: string;
  nominee: {
    nomineeName: string;
    nomineePhone: number;
    nomineeNid: number;
    nomineeRelation: string;
    distributation: number;
  };
};
