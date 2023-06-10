import { StatusCodes } from "http-status-codes";
import Song from "../models/Zefen.js";

export const getListOfZefen = async (req, res) => {
  const songs = await Song.find();
  return res.status(StatusCodes.OK).json(songs);
};

export const createMusicGener = async (req, res) => {
  try {
    // Check if a genre with the same category already exists
    const existingGener = await Song.findOne({ category: req.body.category });

    if (existingGener) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Genre already exists" });
    }

    const createdGener = await Song.create({
      category: req.body.category,
      description: req.body.description,
      generImage: req.body.generImage,
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: "gener created", createdGener });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export default { getListOfZefen, createMusicGener };
