
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
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
    }).concat(apiSlice.middleware),
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;