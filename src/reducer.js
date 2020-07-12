import {combineReducers} from "redux-loop";
import getBookDetails from "../src/HomePage/HomePageReducer";

export default combineReducers(
    getBookDetails
)