import {ADD_TO_CART, DELETE_FROM_CART, SET_INITIALSTATE_FOR_BUYPAGE,SELECTED_NO_OF_ITEMS} from "./BuyPriceAction";

export const initialState = {
    addedToCart: [],
    deletedFromCart: false,
    noOfItems:0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log("ADD CART",action.payload);
            return {...state, addedToCart: action.payload}
        }

        case DELETE_FROM_CART: {
            console.log("SDSADDSAD")
            return {...state, addedToCart: [], deletedFromCart: true}
        }
        case SELECTED_NO_OF_ITEMS : {
            console.log("noOFITems",action.payload);
            return {...state,noOfItems:action.payload}
        }

        case SET_INITIALSTATE_FOR_BUYPAGE: {
            return {...initialState}
        }

        default:
            return state
    }
}