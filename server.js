import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import zefenRoutes from "./routes/zefenRoutes.js";
import userRoute from "./routes/userRoutes.js";
import songRoute from "./routes/songRoutes.js";
import ArtistRoute from "./routes/artistRoutes.js";
import uploadSongRoute from "./routes/fileRoutes.js";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import { configureJwtStrategy } from "./passport-config.js";

//loads .env file contents into process.env (environment variables)
dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true, //Access-Control-Allow-Credentials true (we allow credentials to be sent)
    origin: true, //Access-Control-Allow-Origin *
  })
);

//middleware to parse cookies and add those cookies to req.cookies
app.use(cookieParser());

configureJwtStrategy(passport);

//allows us to parse json information from http body to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parses urlencoded data

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });
app.use("/api/song", songRoute);
app.use("/api/artist", ArtistRoute);
app.use("/api/zefens", zefenRoutes);
app.use("/api/users", userRoute);

app.use("/api/files", uploadSongRoute);

app.use("/upload", express.static("./upload")); //The app.use() function is used in Express.js to define middleware. In this specific case, app.use("/upload", express.static("./upload")) is used to serve static files from the /upload URL path.

app.listen(4000, () => console.log("Server is listening for requests."));
