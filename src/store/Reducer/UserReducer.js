import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userDetail: [],
    userLogin: [true],
    hasUser: false,
    searching: []
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        getUserDetail: (state, action) => {

            state.userDetail = action.payload
            state.userLogin = false;
            state.hasUser = true;
            localStorage.setItem('userDetail', JSON.stringify(action.payload));
        },
        signOutDettail: (state) => {
            state.userDetail = [];
            state.hasUser = false;
        },
        getUserFromLocalStorage: (state, action) => {
            state.userDetail = action.payload
            state.userLogin = false;
            state.hasUser = true;

        },
        showLoginForm: (state) => {
            state.userLogin = true;
        },
        hideLoginForm: (state) => {
            state.userLogin = false;
        },
        setSearching: (state, payload) => {
            state.searching = payload.payload;

        }
    },
})

// Action creators are generated for each case reducer function
export const { getUserDetail, signOutDettail, showLoginForm, hideLoginForm, getUserFromLocalStorage, setSearching } = userReducer.actions

export default userReducer.reducer