import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

interface SelectState{
    select:boolean,
}

const initialState={
    select:false,
};

export const selectSlice = createSlice({
    name:'select',
    initialState,
    reducers:{
        changeSelect(status){
            status.select=!status.select;
        }
    }

});

export const { changeSelect } = selectSlice.actions;
export default selectSlice.reducer;



