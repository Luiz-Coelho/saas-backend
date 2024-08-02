import { Document, model, Schema } from "mongoose";
import { Track } from "../schemas/track.schema";

interface ITrack extends Document, Track {}

const trackSchema = new Schema<ITrack>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    customer: [
      {
        type: Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const TrackModel = model<ITrack>("Track", trackSchema);
