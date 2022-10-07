import componentReducer from './reducers/componentReducer'

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../Features/Auth/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categoryReducer'

// const store = configureStore(
//  { reducer: {
//     component: componentReducer
//   }}
// );

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        component: componentReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiSlice.middleware),
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;