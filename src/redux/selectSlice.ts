import {Ticket} from "../helpers/getTickets";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface SelectState{
    tickets:Array<number>,
    listNumber:Ticket[]
}

const initialState:SelectState ={
    tickets:[],
    listNumber:[]   
    
};
const limitBuy = 3
export const selectSlice = createSlice({
    name:'selected',
    initialState,
    reducers:{
        ticketsSelected: (state, action:PayloadAction<number>) =>{
            
            if(state.tickets.includes(action.payload))
                state.tickets = state.tickets.filter((e)=> e !== action.payload)
            else
                state.tickets = state.tickets.length < limitBuy 
                                    ? [...state.tickets, action.payload] 
                                    : [...state.tickets.slice(1), action.payload]
        },
        ticketsReset: (state, action:PayloadAction<Ticket[]>) =>{
            state.tickets = []
            state.listNumber = action.payload;
            
            console.log('reset')
        }
    }

});

export const { ticketsSelected, ticketsReset } = selectSlice.actions;
export default selectSlice.reducer;



