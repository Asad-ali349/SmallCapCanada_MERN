import mongoose from 'mongoose';

const DisclaimerTextSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

export default mongoose.model('DisclaimerTexts', DisclaimerTextSchema);
