
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/Auth/authSlice'
import categoryReducer from './reducers/categoryReducer'

export const store = configureStore({
    reducer:{
        // [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
    devTools: true
})

export default store;