import express from "express";
const router=express.Router();

import MainPage from "../models/MainPage";
import {IChoiceBook} from '../interfaces/IChoiceBook';
import {IWorldLiterature} from '../interfaces/IWorldLiterature';
import {ITopicBook} from '../interfaces/ITopicBook';
import {IPoem} from '../interfaces/IPoem'
import { IMainPages } from "../interfaces/IMainPages";

router.get("/",async(req,res)=>{
    try{
        const mainPages=await MainPage.findOne();
        const result={
            choiceBook : mainPages.choiceBook,
            worldLiterature : mainPages.worldLiterature.map(v=>{
                console.log("test:",v)
                console.log("image:",v.image)
                console.log("test2:",v.clipTime)
                return {
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

router.get("worldLiterature/:index",async(req,res)=>{
    const index = req.params.index;
    try{
        const mainPage = await MainPage.findOne();
        const detailElement = mainPage.worldLiterature[index];
        res.json(detailElement);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

// router.post("/",async(req,res)=>{
//     try{
//         const {
//             reqChoiceBook,
//             reqWorldLiterature,
//             reqTopicBook,
//             reqPoem,
//         } = req.body;

//         let choiceBook : IChoiceBook={
//             image : reqChoiceBook.image,
//             title: reqChoiceBook.title,
//             writer: reqChoiceBook.writer,
//             reader: reqChoiceBook.reader
//         }
//         // let worldLiterature : IWorldLiterature={
//         //     image : reqWorldLiterature.image,
//         //     title: reqWorldLiterature.title,
//         //     writer: reqWorldLiterature.writer,
//         //     clipTime: reqWorldLiterature.clipTime,
//         //     rentPrice: reqWorldLiterature.rentPrice,
//         //     price: reqWorldLiterature.price,
//         // }
//         let mainpage = new MainPage(choiceBook);
//         await mainpage.save();
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send("Server Error")
//     }
// })

module.exports = router