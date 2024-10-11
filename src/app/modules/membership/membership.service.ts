import { Membership } from "./membership.interface";
import MembershipModel from "./membership.model";

const createMembershipIntoDB = async (memberData: Membership) => {
  const result = await MembershipModel.create(memberData);
  return result;
};

const getAllMembershipFromDB = async (email: string) => {
  const result = await MembershipModel.find({ branchEmail: { $eq: email } })
    .populate("group")
    .populate("assignFieldOfficer")
    .populate("referenceEmployee")
    .populate("referenceMember");
  return result;
};

const getSingleMembershipFromDB = async (id: string) => {
  const result = await MembershipModel.findById({ _id: id });
  return result;
};

export const MembershipServices = {
  createMembershipIntoDB,
  getAllMembershipFromDB,
  getSingleMembershipFromDB,
};
