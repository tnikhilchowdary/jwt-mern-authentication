import express from "express";
import {getUsers,addUsers} from "../controllers/authcontroller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);

export default router;