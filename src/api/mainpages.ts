import express from "express";

const router=express.Router();

import MainPage from "../models/MainPage"


router.get("/",async(req,res)=>{
    try{
        const mainPages=await MainPage.findOne();
        const result=await{
            choiceBook : mainPages.choiceBook,
            worldLiterature : mainPages.worldLiterature.map(v=>{
                return{
                    image:v.image,
                    title:v.title,
                    writer:v.writer,
                    clipTime:v.clipTime,
                    rentPrice:v.rentPrice,
                }
            }),
            topicBook:mainPages.topicBook,
            poem:mainPages.poem
        }
        res.json(result);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;