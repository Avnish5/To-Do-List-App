//import the 'mongoose' library
const mongoose=require('mongoose');
//creating the schema
const todo_Schema=new mongoose.Schema({
description:{
    type:"string",
    required: true,
},

date:{
    type:"string",
    required:true,
},

category:{
    type:"string",
    required:true,
}

});

//create the model
const todo=mongoose.model('todo',todo_Schema);
//export the module
module.exports=todo;
