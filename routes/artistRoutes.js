import express from "express";
import {
  createArtist,
 listArtistByName,
} from "../controllers/artistController.js";
const route = express.Router();

route.get("/byArtist/:firstName", listArtistByName);
route.post("/newArtist", createArtist);
export default route;
