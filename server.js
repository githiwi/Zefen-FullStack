import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import zefenRoutes from "./routes/zefenRoutes.js";
import userRoute from "./routes/userRoutes.js";
import songRoute from "./routes/songRoutes.js";
import ArtistRoute from "./routes/artistRoutes.js";
import cors from "cors";

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
// app.use(cookieParser());

// configureJwtStrategy(passport);

//allows us to parse json information from http body to req.body
app.use(express.json());

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
app.use("/upload", express.static("./upload"));

app.listen(4000, () => console.log("Server is listening for requests."));
