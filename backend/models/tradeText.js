import mongoose from 'mongoose';

const TradeTextSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

export default mongoose.model('TradeTexts', TradeTextSchema);
