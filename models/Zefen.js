import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "song" }], //array of object Id's (in this case _id of songs documents)
  artistImage: String,
});

const songSchema = new Schema({
  title: String,
  artists: [{ type: Schema.Types.ObjectId, ref: "artist" }],
  musicUrl: String,
  gener: { type: Schema.Types.ObjectId, ref: "gener" },
});

const generSchema = new Schema({
  category: {
    type: String,
    enum: {
      values: ["Bati", "Ambasel", "Anchihoye", "Tizita"],
      message: `{VALUE} not the write category`,
    },
  },
  description: String,
});

const Gener = model("gener", generSchema);
const Song = model("song", songSchema);
const Artist = model("artist", artistSchema);
export default { Gener, Song, Artist };
