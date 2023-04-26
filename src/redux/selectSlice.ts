import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';


interface SelectState{
    tickets:Array<number>,
}

const initialState:SelectState ={
    tickets:[],
};
const limitBuy = 3
export const selectSlice = createSlice({
    name:'selected',
    initialState,
    reducers:{
        ticketsSelected: (state, action:PayloadAction<number>) =>{
            console.log(state)
            if(state.tickets.includes(action.payload))
                state.tickets = state.tickets.filter((e)=> e !== action.payload)
            else
                state.tickets = state.tickets.length < limitBuy 
                                    ? [...state.tickets, action.payload] 
                                    : [...state.tickets.slice(1), action.payload]
        }
    }

});

export const { ticketsSelected } = selectSlice.actions;
export default selectSlice.reducer;



