import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "song" }], //array of object Id's (in this case _id of songs documents)
  artistImage: String,
});

const Artist = model("artist", artistSchema);
export default Artist;
