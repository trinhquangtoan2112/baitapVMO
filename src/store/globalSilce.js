

import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducer/UserReducer'


const store = configureStore({
    reducer: {
        UserReducer
    },
})

export default store