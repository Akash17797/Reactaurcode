import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/Todo/TodoSlice'

export const store = configureStore({   // configureStore takes values in form of objects
    reducer: todoReducer
})