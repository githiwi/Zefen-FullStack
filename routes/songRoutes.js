import express from "express";

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

  listSongs
);

router.get(
  "/byTitle/:title",

  getSongByName
);

router.get(
  "/byGener/:gener",

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

/**
 *
 */
router.post(
  "/addSong",

  upload.single("audio"),
  createSong
);

export default router;
