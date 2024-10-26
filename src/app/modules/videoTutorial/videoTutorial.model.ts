import { model, Schema } from "mongoose";
import { VideoTutorial } from "./videoTutorial.interface";

const VideoTutorialSchema = new Schema<VideoTutorial>(
  {
    videoTitle: { type: String, required: true },
    videoLink: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Enable", "Disable"],
      default: "Enable",
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const videoTutorialModel = model("videoTutorial", VideoTutorialSchema);
