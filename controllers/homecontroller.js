
 const todo=require("../models/to-do");
//controller for '/home' url
module.exports.home=(req,res)=>
{
     return res.render('home');
};


//controller for displating the to do list
module.exports.task=(req,res)=>
{
    todo.find({},(err,newtask)=>{
        if(err)
        {
            console.log("error");
        }
       
        return res.render('task',{title:"Tasks",taski:newtask});
    });  
};
//controller for adding the task
module.exports.create=(req,res)=>{
   todo.create({
       description:req.body.discription,
       date:req.body.duedate,
       category:req.body.category,

   },(error,newtask)=>{
       if(error)
       {
           console.log("There is an error while creating the task in databse");
       }
       return res.redirect('/add');
   });

};

//controller for removing the task
module.exports.remove=(req,res)=>{
let id=req.query.id;
todo.findByIdAndDelete(id,(err)=>{
    if(err)
    {
        console.log("error delete");
    }
    return res.redirect('back');
});
};