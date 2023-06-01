import express from "express";
import {
  getListOfZefen,
  createMusicFiles,
} from "../controllers/zefenController.js";

const route = express.Router();
route.get("/all", getListOfZefen);
route.post("/create", createMusicFiles);

export default route;
