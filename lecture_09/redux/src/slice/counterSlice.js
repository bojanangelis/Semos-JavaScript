import { createSlice } from "@reduxjs/toolkit"


// const initialState = {
//     value: 0,
// }
// counterSliece

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    // increment
    //decrement
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value <= 0) return
            state.value -= 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
