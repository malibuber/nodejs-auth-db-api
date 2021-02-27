const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv =require('dotenv');
// import routers

const authRoute = require('./routes/auth');
const postsRoute = require("./routes/posts");

// db connection
dotenv.config();
mongoose.connect(process.env.DATABASE_URL,
{useNewUrlParser: true ,useUnifiedTopology: true},
() => console.log("connect to db"));

// middleware 

app.use(express.json());

// route middleware

app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000 , () => console.log("server up"));