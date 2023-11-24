import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-reducer"
import uiSlice from "./ui-slice"

const store = configureStore({
    reducer: { auth: authSlice.reducer, ui: uiSlice.reducer },
})

export default store