import { StatusCodes } from "http-status-codes";
import Song from "../models/Zefen.js";

export const getListOfZefen = async (req, res) => {
  const songs = await Song.find();
  return res.status(StatusCodes.OK).json(songs);
};

export const createMusicGener = async (req, res) => {
  try {
    const createdGener = await Song.create({
      category: req.body.category,
      description: req.body.description,
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: "gener creted", createdGener });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export default { getListOfZefen, createMusicGener };
