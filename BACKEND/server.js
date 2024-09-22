import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import imageType from "image-type";

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
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/roomdetails", async (req, res) => {
    try {
        const rd = await pg.query(`SELECT * FROM royalrooms`);
        if (rd.rows.length > 0) {
            const rooms = await Promise.all(rd.rows.map(async (room) => {
                let { roomimg, roomname, staytype, roomprice } = room;

                if (typeof roomimg === 'string') {
                    roomimg = Buffer.from(roomimg, 'base64');
                }

                const imgType = await imageType(roomimg);
                const mimeType = imgType ? imgType.mime : 'image/jpg';

                return {
                    file: roomimg.toString("base64"),
                    roomname,
                    staytype,
                    roomprice,
                    mimeType,
                };
            }));

            res.json(rooms);
        } else {
            res.status(404).send("No rooms found.");
        }
    } catch (error) {
        console.log("Error Getting Room Details!!!", error);
        res.status(500).send("Error retrieving data!");
    }
});

app.post("/addroom", upload.single('roomImg'), async (req, res) => {
    const { roomname, staytype, roomprice } = req.body;
    const roomImg = req.file;

    if (!roomImg) {
        return res.status(400).send("No file Uploaded!");
    }

    try {
        const addroomres = await pg.query(
            `INSERT INTO royalrooms (roomimg, roomname, staytype, roomprice) VALUES ($1, $2, $3, $4) RETURNING *`, 
            [roomImg.buffer, roomname, staytype, roomprice]
        );

        res.json(addroomres.rows[0]);
    } catch (error) {
        console.error("Error uploading Room Details:", error);
        res.status(500).send('Error uploading Room Details');
    }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
