import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { generateMemberId } from "../../utils/generateId";
import { BranchModel } from "../branch/branch.model";
import { CompanyModel } from "../company/company.model";
import { RegisteredPackage } from "../registerPackage/registerPackage.interface";
import { Membership } from "./membership.interface";
import MembershipModel from "./membership.model";

const createMembershipIntoDB = async (memberData: Membership) => {
  const company = await CompanyModel.findOne({
    companyEmail: memberData?.companyEmail,
  })
    .select("registeredPackage")
    .populate("registeredPackage", "memberLimit");

  const memberLimit = (company?.registeredPackage as RegisteredPackage)
    ?.memberLimit;

  // BranchModel থেকে branchEmail গুলো বের করে আনা
  const branches = await BranchModel.find({
    companyEmail: memberData.companyEmail,
  }).select("branchEmail");

  // branchEmail গুলো একটি অ্যারের মধ্যে রেখে দেওয়া
  const branchEmails = branches.map((branch) => branch.branchEmail);

  // MemberShipModel এ এই branchEmails দিয়ে কেবল সংখ্যাটি বের করা
  const memberCount = await MembershipModel.countDocuments({
    branchEmail: { $in: branchEmails },
  });

  if (memberLimit <= memberCount) {
    throw new AppError(httpStatus.BAD_REQUEST, "Member Limit is Full");
  }

  const isMemberExits = await MembershipModel.findOne({
    email: memberData.email,
  });

  if (isMemberExits) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Member Email is already exits!"
    );
  }

  // set memberId
  memberData.memberId = await generateMemberId(memberData.branchEmail);

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

const getAllSavingMembershipFromDB = async (email: string) => {
  const result = await MembershipModel.aggregate([
    { $match: { branchEmail: email, accountBalance: { $gt: 0 } } },
  ]);

  return result;
};

const getSingleMembershipFromDB = async (id: string) => {
  const result = await MembershipModel.findById({ _id: id });
  return result;
};

const searchMemberFromDB = async (searchQuery: any, searchEmail: any) => {
  try {
    // Check if searchQuery is a number
    const isNumber = !isNaN(Number(searchQuery));

    // Build query dynamically
    const query = {
      branchEmail: searchEmail, // Branch-specific filtering
      $or: [
        { memberName: { $regex: searchQuery, $options: "i" } },
        { phoneNo: { $regex: searchQuery, $options: "i" } },
        ...(isNumber ? [{ memberId: searchQuery }] : []),
      ],
    };

    const results = await MembershipModel.find(query);

    // Log results if needed
    if (!results.length) {
      return [];
    }

    return results;
  } catch (error) {
    console.error("Error searching members:", error);
    throw new Error("Failed to search members. Please try again later.");
  }
};

export const MembershipServices = {
  createMembershipIntoDB,
  getAllMembershipFromDB,
  getAllSavingMembershipFromDB,
  getSingleMembershipFromDB,
  searchMemberFromDB,
};
