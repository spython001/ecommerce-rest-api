const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dot } = require("node:test/reporters");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {console.error(err);});

app.listen(5000, ()=>{
    console.log("Backend server is running")
});