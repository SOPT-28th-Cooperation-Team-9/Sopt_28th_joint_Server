import express from "express";

const router=express.Router();

import mainpage from "../models/MainPage"
//import mainpage from "../models/mainpage";

router.get("/mainPage",async(req,res)=>{
    try{
        const MainPages=await mainpage.find();
        res.json(MainPages);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    } 
});

module.exports = router;