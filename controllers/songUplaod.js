import { StatusCodes } from "http-status-codes";
import File from "../models/File.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import Song from "../models/Song.js";
import createSong from "./songController.js";
//import axios from "../util/axiosInstance";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



export const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    console.log(
      "location of file",
      path.join(__dirname, `../${file.filePath}`)
    );
    //create an absolute path.
    return res.sendFile(path.join(__dirname, `../${file.filePath}`));
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};




export const uploadSong = async (req, res) => {
  try {
    const { title, artists, gener } = req.body; // Retrieve the song fields from the request body

    const newFile = await File.create({
      filename: req.file.filename,
      filePath: req.file.path,
      size: req.file.size,
      fileMimetype: req.file.mimetype,
    });

    // Create the song using the provided fields
    await createSong({
      title,
      artists,
      gener,
      musicUrl: newFile._id, // Assign the ID of the newly created file as the musicUrl
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "File uploaded and song created successfully", newFile });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};
