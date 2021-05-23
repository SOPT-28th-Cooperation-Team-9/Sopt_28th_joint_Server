import express from "express";

const router=express.Router();

import MainPage from "../models/MainPage"


router.get('/',async(req,res)=>{
    try{
        console.log("mainpage");
        const MainPages=MainPage.find();
        res.json(MainPages);
    }catch(error){
        console.log(res.json(MainPage.find()));
        console.error(error.message);
        res.status(500).send("Server Error");
    } 
});

module.exports = router;