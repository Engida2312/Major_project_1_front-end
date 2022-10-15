import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categoryReducer'
import componentReducer from './reducers/componentReducer'


const store = configureStore(
  {
    reducer: {
      category: categoryReducer,
      component: componentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  });

export default store;