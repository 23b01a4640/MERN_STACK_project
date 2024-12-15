import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';

dotenv.config();

const app=express();

connectDB();

app.get("/products", (req, res) =>{});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});

//oCkByd5yxf5w8tyQnode