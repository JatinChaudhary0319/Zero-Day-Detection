import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authData/authDataSlice";
import logsSlice from "./LogsData/logsData";

const store = configureStore({
    reducer: { 
        auth: authSlice.reducer,
        logs: logsSlice.reducer,
    }
});

export default store;