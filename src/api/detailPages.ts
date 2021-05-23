import express, { Request, Response } from "express";

const router=express.Router();

import MainPage from "../models/MainPage";

router.get("/:book_id",async(req:Request,res:Response)=>{
    const index = req.params.book_id;
    try{
        const mainPage = await MainPage.findOne();
        const detailElement = mainPage.worldLiterature[index];
        res.json(detailElement);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error")
    }
}); 

module.exports = router;