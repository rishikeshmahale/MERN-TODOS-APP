import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./routes/route.js";

const app = express();
const PORT = 8000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

app.get("/", (req, res) => {
    res.send("Backend Executed")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


