import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './selectSlice';

const store = configureStore({
    reducer:{
        select: selectReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

