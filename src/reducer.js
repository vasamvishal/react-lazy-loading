import {combineReducers} from "redux-loop";
import homePage from "../src/HomePage/HomePageReducer";
import buyBookDetails from "../src/BuyPage/BuyPriceReducer";
import header from "./HeaderIcons/HeaderIconsReducer";
import addToCart from "./AddToCart/AddToCartReducer";
import siteHeader from "./SiteHeader/SiteHeaderReducer";
import loginForm from "./Login/LoginReducer";
import logoutPopinButton from "./Component/PopupButtonReducer";
import registrationForm from "./Registartion/RegistrationReducer";
import sucessComponent from "./SucessComponent/SucessComponentReducer";

export default combineReducers({
        homePage,
        buyBookDetails,
        header,
        addToCart,
        siteHeader,
        loginForm,
        logoutPopinButton,
        registrationForm,
        sucessComponent
    }
)