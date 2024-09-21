import { Group } from "./group.interface";
import { GroupModel } from "./group.mode";

const createGroupIntoDB = async (groupData: Group) => {
  const result = await GroupModel.create(groupData);
  return result;
};

const updateGroupIntoDB = async (id: string, payload: Group) => {
  const result = await GroupModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
};

const getAllGroup = async () => {
  const result = await GroupModel.find();
  return result;
};

export const groupServices = {
  createGroupIntoDB,
  updateGroupIntoDB,
  getAllGroup,
};
