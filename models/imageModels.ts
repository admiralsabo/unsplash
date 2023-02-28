import createModel from "@/lib/createModel";
import { Schema, model, models, Model } from "mongoose";
interface IImage {
  label: string;
  url: string;
}
interface IImageMethods {}

type ImageModel = Model<IImage, {}, IImageMethods>;
const imageSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default createModel<IImage, ImageModel>("image", imageSchema);
