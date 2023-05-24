
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

type Anchor = 'mercadopago'|'transference'|'init'|'how';
interface TabState{
    tabs:Record<string,boolean>;
    
}

const initialState:TabState ={
    tabs:{
        mercadopago:false,
        transference:false,
        init:true,
        how: false
    }
};
const resetState:TabState = {tabs:{...initialState.tabs,['init']:false}};

export const tabSlice = createSlice({
    name:'tab',
    initialState,
    reducers:{
        setTab: (state, action:PayloadAction<Anchor>) =>{
            state.tabs = {...resetState.tabs, [action.payload]:true}
        }
    }

});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;



