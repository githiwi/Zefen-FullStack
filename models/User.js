import { Schema, model } from "mongoose";

const userSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
  favoriteSongs: [{ type: Schema.Types.ObjectId, ref: 'song' }],
  favoriteArtists: [{ type: Schema.Types.ObjectId, ref: 'artist' }],
});

//create the model based on the schema
const User = model("user", userSchema);

//export this model to the rest of our application
export default User;
