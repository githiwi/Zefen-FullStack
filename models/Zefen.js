import { Schema, model } from "mongoose";

const generSchema = new Schema({
  category: {
    type: String,
    enum: {
      values: ["Bati", "Ambasel", "Anchihoye", "Tizita"],
      message: `{VALUE} not the write category`,
    },
  },
  description: String,
  generImage:String
});

const Gener = model("gener", generSchema);
export default Gener;
