import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import router from "./routes/router.js";

import connectDB from "./database/db.js";
connectDB() 

const app = express();
app.use(express.json())

app.use('/',router)

app.listen(process.env.PORT)