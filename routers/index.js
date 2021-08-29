//importing the 'express' module
const express=require('express');
//initialize the router

const router=express.Router();
const homecontroller=require('../controllers/homecontroller');
//root directory of router
router.get('/home',homecontroller.home);
router.get('/add',homecontroller.task);
router.post('/create-task',homecontroller.create);
router.get('/delete',homecontroller.remove);




module.exports=router;