
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/Auth/authSlice'
import categoryReducer from './reducers/categoryReducer'
import componentReducer from './reducers/componentReducer'

const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      category: categoryReducer,
      component: componentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
    devTools: true
})

export default store;