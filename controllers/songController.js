import { StatusCodes } from "http-status-codes";
import Song from "../models/Song.js";

export const listSongs = async (req, res) => {
  try {
    //populate both srtist and gener (embed those documents into the song document by reference)
    // console.log("the user who made the request is", req.user);
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
export const creteSong = async (req, res) => {
  try {
    // console.log("why",req)
    const createdSong = await Song.create({
      title: req.body.title,
      artists: req.body.artists,
      musicUrl: req.body.musicUrl,
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

export default { creteSong, listSongs };
