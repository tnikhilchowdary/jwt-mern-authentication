import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDb();
const app = express();
app.use(express.json());

const PORT=1000;

app.get("/", (req, res) => {
    res.send("Welcome to the NODEjS");
})

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log("Server is running");
})