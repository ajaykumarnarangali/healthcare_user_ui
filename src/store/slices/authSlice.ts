import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../../types/auth";

const initialState: AuthState = {
    accessToken: null,
    userId: null,
    isAuthenticated: false,
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.userId = action.payload.userId;
            state.isAuthenticated = true;
            state.isLoading = false;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        logout: (state) => {
            state.accessToken = null;
            state.userId = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
    }
});

export const { setLoading, setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;