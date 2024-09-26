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
        const rd = await pg.query(`SELECT id, roomname, staytype, roomprice, roomimg FROM roomfeatures`);
        // console.log(rd);
        
        if (rd.rows.length > 0) {
            const rooms = await Promise.all(rd.rows.map(async (room) => {
                let {id, roomname, staytype, roomprice, roomimg } = room;

                if (typeof roomimg === 'string') {
                    roomimg = Buffer.from(roomimg, 'base64');
                }

                const imgType = await imageType(roomimg);
                const mimeType = imgType ? imgType.mime : 'image/jpg';

                return {
                    id,
                    roomname,
                    staytype,
                    roomprice,
                    file: roomimg.toString("base64"),
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
    const id = req.params.id  // Extracting the room ID from the URL
    // console.log("Room ID from URL:", id);  // Log for debugging
    
    try { 
        const roomdet = await pg.query(
            `SELECT size,
                entertainment,
                connectivity,
                btlr_service,
                guests,
                location_r,
                occupancy,
                refreshment,
                extras,
                roomname,
                staytype,
                roomprice,
                roomimg
            FROM roomfeatures WHERE id = $1`, [id]
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
                roomname,
                staytype,
                roomprice,
                roomimg
            } = roomdet.rows[0];

            // if (typeof roomimg === 'string') {
            //     roomimg = Buffer.from(roomimg, 'base64');
            // }

            if (!(roomimg instanceof Buffer)) {
                roomimg = Buffer.from(roomimg, 'base64');
            }

            const imgType = imageType(roomimg); // Remove await, imageType is synchronous
            const mimeType = imgType ? imgType.mime : 'image/jpeg';

            // const imgType = await imageType(roomimg);
            // const mimeType = imgType ? imgType.mime : 'image/jpg';

            res.json({
                size,
                entertainment,
                connectivity,
                btlr_service,
                guests,
                location_r,
                occupancy,
                refreshment,
                extras,
                roomname,
                staytype,
                roomprice,
                file: roomimg ? roomimg.toString("base64") : null,
                mimeType
            });
        } else {
            console.log("No data found for room_id: ", id);
            res.status(404).json({ message: "Room features not found." });
        }
    } catch (error) {
        console.log("Error Fetching Data", error);
        res.status(500).json({ message: "Error retrieving room features." });
    }
});

app.post("/addroom", upload.single('roomImg'), async (req, res) => {
    console.log("Request Send");
    
    const { ad_r_size, ad_r_E, ad_r_C, ad_r_BS, ad_r_G, ad_r_L, ad_r_O, ad_r_R, ad_r_Extras ,roomname, staytype, roomprice } = req.body;
    const roomImg = req.file;

    if (!ad_r_size || !ad_r_E || !ad_r_C || !ad_r_BS || !ad_r_G || !ad_r_L || !ad_r_O || !ad_r_R || !ad_r_Extras || !roomImg) {
        console.log("All Fields are Requires!");
        return res.status(400).json({ error: 'All fields are required' });
    };

    try {
        const addroomres = await pg.query(
            `INSERT INTO roomfeatures (size, entertainment, connectivity, btlr_service, guests, location_r, occupancy, refreshment, extras, roomname, staytype, roomprice, roomimg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`, 
            [ad_r_size, ad_r_E, ad_r_C, ad_r_BS, ad_r_G, ad_r_L, ad_r_O, ad_r_R, ad_r_Extras,roomname, staytype, roomprice, roomImg.buffer]
        );
        console.log(addroomres);

        res.json(addroomres.rows[0]);
    } catch (error) {
        console.error("Error uploading Room Details:", error);
        res.status(500).send('Error uploading Room Details');
    }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
