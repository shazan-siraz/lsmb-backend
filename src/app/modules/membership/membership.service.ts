import { Membership } from "./membership.interface";
import MembershipModel from "./membership.model";

const createMembershipIntoDB = async (memberData: Membership) => {
  const result = await MembershipModel.create(memberData);
  return result;
};

const getAllMembershipFromDB = async () => {
  const result = await MembershipModel.find();
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
