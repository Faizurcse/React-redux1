 import { createSlice } from "@reduxjs/toolkit";

 export const CounterSlicer = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByValue:(state,action) =>{
            state.value +=action.payload
        }
    }
 })

 export const {increment,decrement,incrementByValue} = CounterSlicer.actions 

 export default CounterSlicer.reducer;