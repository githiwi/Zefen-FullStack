import express from "express";
import passport from "passport";
import  {creteSong, getSongByGener, getSongByName, listSongs } from "../controllers/songController.js";

const router = express.Router();

router.get('/list', passport.authenticate("jwt", { session: false }), listSongs)

router.get('/byTitle/:title', passport.authenticate("jwt", { session: false }), getSongByName)

router.get('/byGener/:gener', passport.authenticate("jwt", { session: false }), getSongByGener)

router.post("/newsong", passport.authenticate("jwt", { session: false }), creteSong);


export default router;
