import { Group } from "./group.interface";
import { GroupModel } from "./group.mode";

const createGroupIntoDB = async (groupData: Group) => {
  const result = await GroupModel.create(groupData);
  return result;
};

const updateGroupIntoDB = async (
  id: string,
  payload: { groupCode: number; groupTitle: string }
) => {
  const result = await GroupModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result
};

const getAllGroup = async (email: string) => {
  const result = await GroupModel.find({ branchEmail: { $eq: email } });
  return result;
};

export const groupServices = {
  createGroupIntoDB,
  updateGroupIntoDB,
  getAllGroup,
};
