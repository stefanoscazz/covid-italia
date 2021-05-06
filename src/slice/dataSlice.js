import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const url = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
export const dataAction = createAsyncThunk("dataSlice/dataAction", async () => {
    try {
        const data = await axios.get(url)
        return data.data;

    }
    catch (error) {
        throw Error(error);
    }
})

const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        list: null,
        status: null
    },
    extraReducers: {
        [dataAction.pending]: (state, action) => {
            state.status = "loading"
        },
        [dataAction.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.list = payload;
        },
        [dataAction.rejected]: (state) => {
            state.status = "failed"
        }
    }

})
export default dataSlice.reducer