import express from "express";
import multer from "multer";
import { uploadSong,getFileById } from "../controllers/songUplaod.js";


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const originalNameExtention = file.originalname.split(".")[0];

    //this below helps if for example two user upload same image
    cb(null, `${originalNameExtention}-${Date.now()}.${ext}`);
  },
});

//initioalize multer middleware
const upload = multer({storage:storage})

router.get('/byid/:fileId',getFileById);
router.post("/create", upload.single('image'), uploadSong);
export default router;
