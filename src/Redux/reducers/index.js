import { combineReducers } from "redux";
import componentReducer from "./componentReducer";
export default combineReducers({
    componet: componentReducer
});