import mongoose from "mongoose"
import {IMainPages} from "../interfaces/IMainPages"

const MainPageSchema = new mongoose.Schema({
    choiceBook:[
        {
            image:{type:String},
            title:{type:String},
            writer:{type:String},
            reader:{type:String},
        }
    ],
    worldLiterature:[
        {
            image:{type:String},
            title:{type:String},
            writer:{type:String},
            clipTime:{type:String},
            rentPrice:{type:String},
            price:{type:String}
        }
    ],
    topicBook:[
        {
            image:{type:String},
            title:{type:String},
            writer:{type:String},
            price:{type:String}
        }
    ],
    poem:[
        {
            image:{type:String},
            title:{type:String},
            writer:{type:String},
            clipTIme:{type:String},
            rentPrice:{type:String},
            price:{type:String}
        }
    ]
})

export default mongoose.model<IMainPages & mongoose.Document>("MainPage",MainPageSchema)