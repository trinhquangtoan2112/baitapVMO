import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true
}

const LoadingReducer = createSlice({
    name: "loadingreducer",
    initialState,
    reducers: {
        getLoading: (state) => {
            console.log("true")
            state.loading = true;
        },
        hideLoading: (state) => {
            console.log("hide")
            state.loading = false;

        }
    }
});

export const { getLoading, hideLoading } = LoadingReducer.actions

export default LoadingReducer.reducer