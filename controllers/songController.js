import { StatusCodes } from "http-status-codes";
import Song from "../models/Song.js";

export const listSongs = async (req, res) => {
  try {
   
    const listSongs = await Song.find().populate("artists").populate("gener");
    return res.status(StatusCodes.OK).json(listSongs);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getSongByName = async (req, res) => {
  try {
    const getSongs = await Song.find({ title: req.params.title })
      .populate("artists")
      .populate("gener");
    return res.status(StatusCodes.OK).json(getSongs);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const getSongByGener = async (req, res) => {
  try {
    const getSongs = await Song.find({ gener: req.params.gener }).populate(
      "artists"
    );
    return res.status(StatusCodes.OK).json(getSongs);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

//to be continued for this search method
export const getSongByArtist = async (req, res) => {
  try {
    const songsByArtist = await Song.find({}).populate("artists");
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const createSong = async (req, res) => {
  console.log("audioFile", req.file)
  console.log("req.body", JSON.stringify(req.body));
  try {
    console.log("Song Gener",req.body.gener)
    const createdSong = await Song.create({

      title: req.body.title,
      //artists: req.body.artists,
      musicUrl: req.file.path,
     gener: req.body.gener,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "song added", createdSong });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export default { createSong, listSongs, getSongByName };
