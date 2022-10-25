import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',

    initialState: {
        toDoTasks: [],
        doneTasks: [],
        doingTasks: []
    },

    reducers: {
        setToDoTasks: (state, action) => {
            state.toDoTasks = action.payload;
        },
        setDoneTasks: (state, action) => {
            state.doneTasks = action.payload;
        },
        setDoingTasks: (state, action) => {
            state.doingTasks = action.payload;
        }
    }
})
export const { setToDoTasks, setDoneTasks, setDoingTasks } = tasksSlice.actions;
export default tasksSlice.reducer;