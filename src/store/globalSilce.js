

import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducer/UserReducer'
import LoadingReducer from './Reducer/LoadingReducer'


const store = configureStore({
    reducer: {
        UserReducer,
        LoadingReducer
    },
})

export default store