import express, { Request, Response } from "express";

const router=express.Router();

import MainPage from "../models/MainPage";

router.get("/detailPage/:book_id",async(req:Request,res:Response)=>{
    try{
        /*
        const detailPages=await detailPage.findOne({
            id:req.params.book_id
        });
        if(!detailPages) return res.status(400).json({msg:"Book cannot found"});
        res.json(detailPages); */
        res.send("detailpage");
    }catch(error){
        console.error(error.message);
        if(error.kind=="ObjectId")
            return res.status(400).json({msg:"Book cannot found"});
        res.status(500).send("Server Error");
    }
}); 

module.exports = router;