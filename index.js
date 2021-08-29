//express and database setup
const express=require('express');
const app=express();
const db=require('./config/mongoose.js');
const todo=require("./models/to-do");

//port where the server is listening
const port=80;
const path=require('path');

//body parser
const { urlencoded } = require('express');
app.use(express.urlencoded({extended: false}));

//setup the view engine
//middleware for accessiong static file
app.use(express.static('./Assets'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));

//middleware for accessiong static file
app.use('/',require("./routers/index"));

//starting the server for listening
app.listen(port,(error)=>{
    if(error)
    {
        console.log(`There is an error while running the server and the rror is:${port}`);
    }

    console.log(`SERVER is running at port:${port}`);
});