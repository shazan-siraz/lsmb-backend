import { VideoTutorial } from "./videoTutorial.interface";
import { videoTutorialModel } from "./videoTutorial.model";

const createVideoTutorialIntoDB = async (VideoTutorialData: VideoTutorial) => {
  const result = await videoTutorialModel.create(VideoTutorialData);
  return result;
};

const getAllVideoTutorialFromDB = async () => {
  const result = await videoTutorialModel.find({ isDeleted: { $ne: true } });
  return result;
};

const deleteVideoTutorialFromDB = async (id: string) => {
  const result = await videoTutorialModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

export const VideoTutorialServices = {
  createVideoTutorialIntoDB,
  getAllVideoTutorialFromDB,
  deleteVideoTutorialFromDB
};
