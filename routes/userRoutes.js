import express from "express";
import {
  createUser,
  logInUser,
  logoutUser,
} from "../controllers/userController.js";

const route = express.Router();
route.post("/signup", createUser);
route.post("/signin", logInUser);
route.get("/sighout", logoutUser);
export default route;
