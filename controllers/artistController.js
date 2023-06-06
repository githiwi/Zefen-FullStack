import { StatusCodes } from "http-status-codes";
import Artist from "../models/Artist.js";

export const listArtist = async (req, res) => {
  try {
    const listArtist = await Artist.find().populate("songs");
    return res.status(StatusCodes.OK).json(listArtist);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const listArtistByName = async (req, res) => {
  try {
    const listArtist = await Artist.find({
      firstName: req.params.firstName,
    }).populate("songs");
    return res.status(StatusCodes.OK).json(listArtist);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

// export const getArtistByName = async (req, res) => {
//   try {
//     const artistName = await Artist.findOne(
//       (artistName) => Artist.firstName == req.params.firstName
//     );

//     if (!artistName) {
//       return res.status(StatusCodes.NOT_FOUND).json("Artist not found");
//     }
//     return res.status(StatusCodes.OK).json(artistName);
//   } catch (error) {
//     return res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: error.toString() });
//   }
// };

export const createArtist = async (req, res) => {
  try {
    const createdArtist = await Artist.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      songs: req.body.songs,
      artistImage: req.body.artistImage,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "artist added", createdArtist });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
