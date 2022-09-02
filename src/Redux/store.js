import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './reducers/componentReducer'



const store = configureStore(
 { reducer: {
    component: componentReducer
  }}
);

export default store;