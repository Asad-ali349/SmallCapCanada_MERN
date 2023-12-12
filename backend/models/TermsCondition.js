import mongoose from 'mongoose';

const TermsConditionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

export default mongoose.model('TermsConditions', TermsConditionSchema);
