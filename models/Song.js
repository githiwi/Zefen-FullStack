import { Schema, model } from "mongoose";

const songSchema = new Schema({
  title: String,
  artists: { type: Schema.Types.ObjectId, ref: "artist" },
  musicUrl: String,
  gener: { type: Schema.Types.ObjectId, ref: "gener" },
});

const Song = model("song", songSchema);
export default Song;
