import { combineReducers } from "redux";
import reducer from "./authReducer/authReducer";

const reducersContainer = {
  authState:reducer
}


export default combineReducers(reducersContainer);


