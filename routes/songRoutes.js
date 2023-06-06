import express from "express";

import  {creteSong, getSongByName, listSongs } from "../controllers/SongController.js";
const route = express.Router();
route.get('/list',listSongs)
route.get('/byTitle/:title',getSongByName)
route.post("/newsong", creteSong);

export default route;
