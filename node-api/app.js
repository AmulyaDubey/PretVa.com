const express=require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const dotenv = require("dotenv");
const cors=require('cors');
dotenv.config();

const app=express();

mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

//const userRoutes=require('./routes/userRoutes')
const authRoutes= require('./routes/auth')
//middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use("/", authRoutes);

app.get("/", (req, res) =>{
    res.send("Hello from node js")
});

app.listen(8080);