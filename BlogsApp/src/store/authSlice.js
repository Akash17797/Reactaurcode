import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
        
    }
})

export const { login, logout } = authSlice.actions;  // reducers ke andar jo methods hote hai unko hum export karte hai taaki hum unko use kar sake and unko hi action kehte hai.

export default authSlice.reducer;


//jaise humne auth ka state bnaya waise hi hum post ka bhi state bna skte jo ki hmne baad mei khud se bnana hai