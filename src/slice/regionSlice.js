import { createSlice } from '@reduxjs/toolkit'



const regionSlice = createSlice({
    name: "dataSlice",
    initialState: {
        region: ""
    },
    reducers: {
        addRegion: (state, action) => {
            state.region = action.payload;
        }
    }
})
export default regionSlice.reducer;
export const { addRegion } = regionSlice.actions;