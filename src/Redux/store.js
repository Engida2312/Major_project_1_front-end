import componentReducer from './reducers/componentReducer'

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../Features/Auth/authSlice'

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
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;