import express from "express";
import passport from "passport";
import {
  createArtist,
 listArtist,
 listArtistByName,
} from "../controllers/artistController.js";

const router = express.Router();

router.get("/allArtist", passport.authenticate("jwt", { session: false }),listArtist);

router.get("/byArtist/:firstName", passport.authenticate("jwt", { session: false }), listArtistByName);

router.post("/newArtist", passport.authenticate("jwt", { session: false }), createArtist);

export default router;
