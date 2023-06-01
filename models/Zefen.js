import { Schema, model } from "mongoose";
const songSchema = new Schema({
  title: String,
  artist: String,
  //image:
  //music:
});

const zefenSchema = new Schema({
  category: {
    type: String,
    enum: {
      values: ["Bati", "Ambasel", "Anchihoye", "Tizita"],
      message: `{VALUE} not the write category`,
    },
  },
  description: String,
  song: [songSchema],
});

const Zefen = model("zefen", zefenSchema);
export default Zefen;
