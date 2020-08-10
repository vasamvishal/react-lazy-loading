import {ADD_TO_CART, DELETE_FROM_CART, SET_INITIALSTATE_FOR_BUYPAGE} from "./BuyPriceAction";

export const initialState = {
    addedToCart: [],
    deletedFromCart: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log(action.payload);
            return {...state, addedToCart: action.payload}
        }

        case DELETE_FROM_CART: {
            return {...state, addedToCart: [], deletedFromCart: true}
        }

        case SET_INITIALSTATE_FOR_BUYPAGE: {
            return {...initialState}
        }

        default:
            return state
    }
}