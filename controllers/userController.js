import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../helper/authHelpers.js";

export const createUser = async (req, res) => {
  try {
    //GETTING the hashed value from the password
    //SALT will be autogenerated ,==10
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const createdUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: "User successfully Created", createdUser });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const logInUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
      .populate("favoriteSongs")
      .populate("favoriteArtists");

    //does this user name exist?
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "User not authorized." });
    }
    // if there is user let's check if the password is matching with the password provided by that user?
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "User not authorized." });
    }

    ///generate our token
    const token = generateToken(user);

    return res
      .status(StatusCodes.OK)
      .cookie("jwt", token, {
        //ESSENTIAL cookie --> keep track of who is signed in. (storing token)
        httpOnly: true, //no scripting languages can access this cookie
        secure: false, //cookie can only be sent over https SSL/TLS, --> encrypted connection with server
        sameSite: "Lax", //not allowing cookie over cross-site request (when loading images)
      })
      .json({
        message: "login successfull",
        // we are sending the user as an object with only selected keys
        user: {  userId: user._id,
          username: user.userName,
          favoriteSongs: user.favoriteSongs,
          favoriteArtists: user.favoriteArtists  },
      });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const logoutUser = (req, res) => {
  console.log("out");
  res
    .clearCookie("jwt", {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
    })
    .send("User is logged out");
};



export const addFavoriteSong = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { favoriteSongs: req.params.songId } },
      { new: true }
    ).populate('favoriteSongs').populate('favoriteArtists');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addFavoriteArtist = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { favoriteArtists: req.params.artistId } },
      { new: true }
    ).populate('favoriteSongs').populate('favoriteArtists');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {createUser, logInUser, logoutUser}