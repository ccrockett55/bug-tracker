import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers: {
        getUser:(state) => {
            state.push({name:"George Lucas"})
            state.push({name:"Kim Yellowstone"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;