import mongoose from 'mongoose';

const PrivacyTextSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

export default mongoose.model('PrivacyTexts', PrivacyTextSchema);
