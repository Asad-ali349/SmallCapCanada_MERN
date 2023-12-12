import TradeText from "../models/tradeText.js";
import Joi from 'joi';

const TextSchema = Joi.object({
    text: Joi.string().min(3).required(),
}).unknown();

export const CreateText= async (req,res)=>{
    const text =req.body;

    try{
        const { error, value } = TextSchema.validate(req.body);

        if (error) {
            // Return a 400 Bad Request response if validation fails
            return res.status(400).json({ message: error.details[0].message });
        }

        const Text= new TradeText(text);
        const added =await Text.save();
        if(added){
            res.status(200).json({message:"Text Added..."}); 
        }else{
            res.status(500).json({message:"Unable to add the text..."})
        }

    }catch(error){
        console.log(error);
        res.status(505).json({message: error});
    }
}

export const TradeTextDetail= async (req,res)=>{
    const {id} =req.params;
    try{
        let TradeTextDetail= await TradeText.findOne();

        if(!TradeTextDetail){
            TradeTextDetail=new TradeText({text:"How To Trade"});
            TradeTextDetail= await TradeTextDetail.save();
        }

        res.status(200).json(TradeTextDetail);
    }catch(error){
        console.log(error);
        res.status(505).json({message: error});
    }
}

export const UpdateText= async (req,res)=>{
    const {id} =req.params;
    const text =req.body;

    try{
        const { error, value } = TextSchema.validate(req.body);

        if (error) {
            // Return a 400 Bad Request response if validation fails
            return res.status(400).json({ message: error.details[0].message });
        }
        
        const updateText= await TradeText.findByIdAndUpdate(id,text,{new:true});
        
        if(updateText){
            res.status(200).json(updateText);
            
        }else{
            res.status(500).json({message:"Unable to update the text..."})
        }
    }catch(error){
        console.log(error);
        res.status(505).json({message: error});
    }
}