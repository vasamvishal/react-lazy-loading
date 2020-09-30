import {combineReducers} from "redux-loop";
import homePage from "../src/HomePage/HomePageReducer";
import buyBookDetails from "../src/BuyPage/BuyPriceReducer";
import header from "./HeaderIcons/HeaderIconsReducer";
import addToCart from "./AddToCart/AddToCartReducer";
import siteHeader from "./SiteHeader/SiteHeaderReducer";

export default combineReducers({
        homePage,
        buyBookDetails,
        header,
        addToCart,
        siteHeader
    }
)