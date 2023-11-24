import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        removeToken: (state) => {
            state.token = null;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        }
    }
})

export default authSlice