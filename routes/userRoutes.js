import express from "express";
import passport from "passport";
import {
  createUser,
  logInUser,
  logoutUser,
  addFavoriteSong,
  addFavoriteArtist,
  getFavoriteSongs,
  removeFavoriteSong,
} from "../controllers/userController.js";

const router = express.Router();

//post http://localhost:4000/api/users/signup
router.post("/signup", createUser);

//post http://localhost:4000/api/users/signin
router.post("/signin", logInUser);

//get http://localhost:4000/api/users/signout
router.get("/signout", logoutUser);

router.post(
  "/:userId/favorites/songs/:songId",
  passport.authenticate("jwt", { session: false }),
  addFavoriteSong
);
router.post(
  "/:userId/favorites/artists/:artistId",
  passport.authenticate("jwt", { session: false }),
  addFavoriteArtist
);

// Add routes for removeFavoriteSong, addFavoriteArtist, removeFavoriteArtist
router.delete(
  "/:userId/favorites/songs/:songId",
  passport.authenticate("jwt", { session: false }),
  removeFavoriteSong
);

// Fetch favorites song for a user
router.get(
  "/:userId/favorites/songs",
  passport.authenticate("jwt", { session: false }),
  getFavoriteSongs
);


export default router;
