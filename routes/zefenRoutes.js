import express from "express";
import {
  getListOfZefen,
  createMusicGener,
} from "../controllers/zefenController.js";

const route = express.Router();
route.get("/geners", getListOfZefen);
route.post("/createGener", createMusicGener);

export default route;
