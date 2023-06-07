import uiSlice from "./ui-slice"

export const getAuthToken = (formData) => {
    return async (dispatch) => {
        dispatch(
            uiSlice.setLauding({ loading: true })
        )
    }
} 