import express from "express";
import {getUsers,addUsers,updateUser, deleteUser} from "../controllers/authcontroller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;