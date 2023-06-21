import express from "express";

import {
  createArtist,
  listArtist,
  listArtistByName,
} from "../controllers/artistController.js";

const router = express.Router();

router.get("/allArtist", listArtist);

router.get("/byArtist/:firstName", listArtistByName);

router.post("/newArtist", createArtist);

export default router;
