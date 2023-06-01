import { StatusCodes } from "http-status-codes";
import Zefen from "../models/Zefen.js";

export const getListOfZefen = async (req, res) => {
  const Zefens = await Zefen.find();
  return res.status(StatusCodes.OK).json(Zefens);
};

export const createMusicFiles = async (req, res) => {
  try {
    const bati = await Zefen.create({
      category: req.body.category,
      description: req.body.description,
      song: req.body.song,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "zefen file  was created", createMusicFiles: bati });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};

export default { getListOfZefen };
