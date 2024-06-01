import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    dark: true
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

        },
        changeTheme: (state) => {
            console.log("1221214")
            state.dark = !state.dark;
        },
        darkThemeOn: (state) => {
            state.loading = true;
        },
        darkThemeOff: (state) => {
            state.loading = false;
        },
    }
});

export const { getLoading, hideLoading, darkThemeOff, darkThemeOn, changeTheme } = LoadingReducer.actions

export default LoadingReducer.reducer