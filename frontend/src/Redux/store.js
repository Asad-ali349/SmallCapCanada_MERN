import { configureStore } from '@reduxjs/toolkit';
import DisclaimerSlice from './Slices/disclaimer';
import tradeSlice from './Slices/tradeSlice';
import policySlice from './Slices/policySlice';
import termSlice from './Slices/termSlice';
import authSlice from './Slices/authSlice';


const store= configureStore({
    reducer:{
        auth:authSlice,
        disclaimer:DisclaimerSlice,
        trade:tradeSlice,
        policy:policySlice,
        term:termSlice,
    }
})




export default store;