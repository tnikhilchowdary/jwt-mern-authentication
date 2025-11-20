import express from "express";
import {getUsers,addUsers,updateUser, deleteUser} from "../controllers/authcontroller.js";
import {Login} from "../controllers/loginController.js"

const router = express.Router();

router.post("/login", Login);

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;