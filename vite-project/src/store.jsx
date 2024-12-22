//install the redux and redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

const store = configureStore({
    reducer:{
        mycolor:colorReducer
    }
}) 
export default store;