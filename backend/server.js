import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import ROUTER from './routes/routes.js'
import cors from 'cors';
//env variables config
dotenv.config();

//server setup
const APP = express();
const PORT = process.env.PORT;


//routes
APP.use(cors());
APP.use(express.json());
APP.use(ROUTER);

APP.get("/",(req,res) => {
    res.send("Backend started");
});

connection();
APP.listen(PORT,() => {
    console.log(`server stared at ${PORT}`);
});