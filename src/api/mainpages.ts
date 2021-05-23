import express from "express";

const router=express.Router();

import MainPage from "../models/MainPage"


router.get('/',async(req,res)=>{
    try{
        const MainPages=await MainPage.find();
        res.json(MainPages);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    } 
});

module.exports = router;