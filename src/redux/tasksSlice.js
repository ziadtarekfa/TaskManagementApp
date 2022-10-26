import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',

    initialState: {
        toDoTasks: [],
        doneTasks: [],
        doingTasks: [],
        activeBoardID: ""
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
        },
        setActiveBoardID: (state, action) => {
            state.activeBoardID = action.payload;
        },
        addTask: (state, action) => {

            if (action.payload.status === "TODO") {
                state.toDoTasks.unshift(action.payload);
            }
            else if (action.payload.status === "DONE") {
                state.doneTasks.unshift(action.payload);
            }
            else if (action.payload.status === "DOING") {
                state.doingTasks.unshift(action.payload);
            }

        }
    }
})
export const { setToDoTasks, setDoneTasks, setDoingTasks, addTask, setActiveBoardID } = tasksSlice.actions;
export default tasksSlice.reducer;