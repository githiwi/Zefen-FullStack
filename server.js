import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import zefenRoutes from "./routes/zefenRoutes.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();
const app = express();
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

app.use("/zefens", zefenRoutes);
app.use("/users", userRoute);

app.listen(4000, () => console.log("Server is listening for requests."));
