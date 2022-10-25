import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice'

export const Store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
});
