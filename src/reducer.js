import {combineReducers} from "redux-loop";
import homePage from "../src/HomePage/HomePageReducer";
import buyBookDetails from "../src/BuyPage/BuyPriceReducer";
import header from "./HeaderIcons/HeaderIconsReducer";

export default combineReducers({
        homePage,
        buyBookDetails,
        header
    }
)