const express = require('express');
const dbConnection = require('./db/config');
const dotenv = require('dotenv')
const cors = require('cors')
const User = require("./db/User")
const app = express();
app.use(express.json());
dbConnection();
dotenv.config();
app.use(cors());


// posting data in MongoDb
app.post("/register",async(req, resp)=>{
    let user = new User(req.body) 
    let result = await user.save();
    resp.send(result)
})