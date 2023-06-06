import express from "express";
import {
  createArtist,
 listArtist,
 listArtistByName,
} from "../controllers/artistController.js";
const route = express.Router();

route.get("/allArtist",listArtist)
route.get("/byArtist/:firstName", listArtistByName);
route.post("/newArtist", createArtist);
export default route;
