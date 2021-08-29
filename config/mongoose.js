//import the 'mongoose' module
const mongoose=require('mongoose');
//connect to the databse
mongoose.connect('mongodb://localhost/to-do_db',{useNewUrlParser: true});
//aquire the connection
const db=mongoose.connection;
//checking errors
db.on('error',console.error.bind(console,"There is an error while connectiong to server"));
db.once('open',()=>{
console.log("Successfully connected to databse");
});
