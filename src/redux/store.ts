import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './selectSlice';

const store = configureStore({
    reducer:{
        selected: selectReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

