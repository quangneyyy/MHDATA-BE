import express from "express";
import userController from "../controller/user.controller.js";
const router = express.Router();
import UserController from "../controller/user.controller.js";

router.post("/customerList", UserController.insertNewUserCustomerList);

router.get("/customerList", userController.getAllContact);

export default router;
