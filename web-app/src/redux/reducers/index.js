import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import groupReducer from "./groupReducer";
const reducers = combineReducers({ getDataReducer, groupReducer });
export default reducers;
