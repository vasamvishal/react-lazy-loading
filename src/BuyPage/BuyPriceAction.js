
export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"
export const SET_INITIALSTATE_FOR_BUYPAGE = "SET_INITIALSTATE_FOR_BUYPAGE"
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})
export const deleteFromCart = () => ({
    type: DELETE_FROM_CART
})

export const setInitialStateForBuyPage = () => ({
    type: SET_INITIALSTATE_FOR_BUYPAGE
})