import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true
}

const LoadingReducer = createSlice({
    name: "loadingreducer",
    initialState,
    reducers: {
        getLoading: (state) => {

            state.loading = true;
        },
        hideLoading: (state) => {

            state.loading = false;

        }
    }
});

export const { getLoading, hideLoading } = LoadingReducer.actions

export default LoadingReducer.reducer