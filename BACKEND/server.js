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
        // console.log(rd);
        
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

app.get("/room/view/:id", async (req, res) => {
    const roomId = req.params.id;
    try { 
        const roomdet = await pg.query(
            `SELECT * FROM roomfeatures WHERE id = $1`, [roomId]
        );
        // console.log(roomdet);
        
        if (roomdet.rows.length > 0) {
            const {
                size,
                entertainment,
                connectivity,
                btlr_service,
                guests,
                location_r,
                occupancy,
                refreshment,
                extras,
            } = roomdet.rows[0];

            // Structuring the response as an array of key-value pairs
            const featuresArray = [
                { feature: "Size", value: size },
                { feature: "Entertainment", value: entertainment },
                { feature: "Connectivity", value: connectivity },
                { feature: "Butler Service", value: btlr_service },
                { feature: "Guests", value: guests },
                { feature: "Location", value: location_r },
                { feature: "Occupancy", value: occupancy },
                { feature: "Refreshment", value: refreshment },
                { feature: "Extras", value: extras }
            ];

            res.setHeader('Content-Type', 'application/json');
            res.json(featuresArray);  // Returning the array
        } else {
            console.log("No data found for room_id: ", roomId);
            res.status(404).json({ message: "Room features not found." });
        }
    } catch (error) {
        console.log("Error Fetching Data", error);
        res.status(500).json({ message: "Error retrieving room features." });
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

app.post("/addrf", async (req, res) => {
    const {ad_r_size, ad_r_E, ad_r_C, ad_r_BS, ad_r_G, ad_r_L, ad_r_O, ad_r_R, ad_r_Extras} = req.body;

    if (!ad_r_size || !ad_r_E || !ad_r_C || !ad_r_BS || !ad_r_G || !ad_r_L || !ad_r_O || !ad_r_R || !ad_r_Extras) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const addroomftrs = await pg.query(
            `INSERT INTO roomfeatures (size, entertainment, connectivity, btlr_service, guests, location_r, occupancy, refreshment, extras) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING*`, [ad_r_size, ad_r_E, ad_r_C, ad_r_BS, ad_r_G, ad_r_L, ad_r_O, ad_r_R, ad_r_Extras]
        );

        res.json(addroomftrs.rows[0]);
    } catch (error) {
        console.log("Error uploading Data!!", error);
    }
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
