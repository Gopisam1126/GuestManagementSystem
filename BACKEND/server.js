import express from "express";
import pkg from "pg";
import dotenv from "dotenv";

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
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});