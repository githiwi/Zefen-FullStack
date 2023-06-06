import express from "express";

import  {creteSong, getSongByGener, getSongByName, listSongs } from "../controllers/SongController.js";
const route = express.Router();
route.get('/list',listSongs)
route.get('/byTitle/:title',getSongByName)
route.get('/byGener/:gener',getSongByGener)
route.post("/newsong", creteSong);

export default route;
