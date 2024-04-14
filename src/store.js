import {configureStore} from '@reduxjs/toolkit'

import couterReducer from './state/CounterSlice'

export default configureStore({
    reducer : {
        counter:couterReducer
    }
})  