import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import { log } from "console";

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

app.post("/addroom", upload.single('roomimg'), async (req, res) => {
    const {roomname, staytype, roomprice} = req.body;
    const roomimg = req.file;

    if (!roomimg) {
        console.log("Error File not Found!!!");
        return res.status(400).send("No file Uploaded!");
    }

    try {
        const addroomres = pg.query(
            `INSERT INTO royalrooms (roomimg, roomname, staytype, roomprice) VALUES ($1, $2, $3, $4) RETURNING *`, [roomimg.buffer, roomname, staytype, roomprice]
        );

        res.json((await addroomres).rows[0]);
    } catch (error) {
        console.error("Error uploading Room DEtails:", err);
        res.status(500).send('Error uploading Room Details');
    }

});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});