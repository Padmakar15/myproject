const express=require('express')
const router=express.Router()

//middleware
const middleware=(req,res,next) =>{
    console.log('hello from middleware');
    next();
}

router.get("/", (req, res)=>{
    res.send("hello world from the server");
})

router.get("/about", middleware, (req, res)=>{
    res.send("hello about from the server");
})

router.get("/contact", (req, res)=>{
    res.send("hello contact from the server");
})


module.exports=router;