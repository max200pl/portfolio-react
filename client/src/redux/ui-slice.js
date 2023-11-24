import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        requestLoading: false,
        requestError: false,
        requestSuccess: false,
        requestMessage: ''
    },

    reducers: {
        setLauding: (state, action) => {
            state.requestLoading = action.payload.loading;
        }
    }
})

export default uiSlice;