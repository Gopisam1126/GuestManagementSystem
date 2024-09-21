import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3000;
const { Pool } = pkg;

dotenv.config();

const pg = new Pool({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
});

pg.connect();


const storage = multer.memoryStorage();
const upload = multer({storage: storage});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});