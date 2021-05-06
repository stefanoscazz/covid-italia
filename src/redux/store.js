import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slice/dataSlice";
import regionSlice from "../slice/regionSlice";


export default configureStore({
    reducer: {
        data: dataSlice,
        region: regionSlice
    },
})