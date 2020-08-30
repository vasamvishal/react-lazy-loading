import { ROUTE_TO_BUY_PAGE } from "./AddToCartAction"
export const initialState = {
    routeToBuyPage: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ROUTE_TO_BUY_PAGE: {
            console.log("rrrr");
            return { ...state, routeToBuyPage: true }
        }

        default:
            return state;
    }
}

