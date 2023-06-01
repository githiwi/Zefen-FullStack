import express from "express";
import {
  createUser,
  logInUser,
  logoutUser,
} from "../controllers/userController.js";

const route = express.Router();

//sample for testing
// {
 //   "firstName": "liya",
//    "lastName": "Test888",
 //   "userName": "liya123",
 //  "email": "liya.test@testing.com",
 //"password":"testing888"
//}

//post http://localhost:4000/api/users/signup
route.post("/signup", createUser);

//post http://localhost:4000/api/users/signin
route.post("/signin", logInUser);
route.get("/sighout", logoutUser);

export default route;
