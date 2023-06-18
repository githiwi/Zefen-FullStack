import express from "express";
import passport from "passport";
import multer from "multer";
import {
  createSong,
  getSongByGener,
  getSongByName,
  listSongs,
} from "../controllers/songController.js";

const router = express.Router();

router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  listSongs
);

router.get(
  "/byTitle/:title",
  passport.authenticate("jwt", { session: false }),
  getSongByName
);

router.get(
  "/byGener/:gener",
  passport.authenticate("jwt", { session: false }),
  getSongByGener
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    console.log("FILE", file);
    const ext = file.originalname.split(".").pop();
    const originalName = file.originalname.split(".")[0];
    cb(null, `${originalName}_${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });

// router.post("/newsong", passport.authenticate("jwt", { session: false }), createSong);
router.post(
  "/addSong",
  passport.authenticate("jwt", { session: false }),
  upload.single("audio"),
  createSong
);

export default router;
