import express from "express";

const app = express();
const PORT=1000;

app.get("/", (req, res) => {
    res.send("Welcome to the NODEjS");
})

app.listen(PORT, () => {
    console.log("Server is running");
})