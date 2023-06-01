import express from "express";
import { createUser } from "../controllers/userController.js";

const route = express.Router();
route.post('signup',createUser)
export default route;
