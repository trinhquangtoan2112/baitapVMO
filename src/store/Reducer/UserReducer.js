import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userDetail: [],
    userLogin: [true],
    hasUser: false
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        getUserDetail: (state, action) => {
            console.log(action, "action")
            state.userDetail = action.payload
            state.userLogin = false;
            state.hasUser = true;
        },
        signOutDettail: (state) => {
            state.userDetail = [];
            state.hasUser = false;
        },
        showLoginForm: (state) => {
            state.userLogin = true;
        },
        hideLoginForm: (state) => {
            state.userLogin = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { getUserDetail, signOutDettail, showLoginForm, hideLoginForm } = userReducer.actions

export default userReducer.reducer