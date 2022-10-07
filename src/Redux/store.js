import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categoryReducer'


const store = configureStore(
  {
    reducer: {
      category: categoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  });

export default store;