import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './selectSlice';
import tabReducer from './tabSlice';

const store = configureStore({
    reducer:{
        selected: selectReducer,
        tab: tabReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

