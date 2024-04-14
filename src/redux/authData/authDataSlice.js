import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { 
    loginData: {}
} 

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setAuthData(state, action){
            state.loginData = {
                username: action.payload.username,
                email: action.payload.email,
                phone: action.payload.phone,
                id: action.payload.id,
                token: action.payload.token
            }
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;