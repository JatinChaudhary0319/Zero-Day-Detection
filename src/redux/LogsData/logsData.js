import { createSlice } from "@reduxjs/toolkit";

const initialLogsState = { 
    logsData: {}
} 

const logsSlice = createSlice({
    name: 'auth',
    initialState: initialLogsState,
    reducers: {
        setLogsData(state, action){
            state.logsData = action.payload;
        }
    }
});

export const logsActions = logsSlice.actions;

export default logsSlice;