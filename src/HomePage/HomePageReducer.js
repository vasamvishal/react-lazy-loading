import {GET_BOOKS} from "./HomePageAction"

export const initialState = {
    array: []
}

export default (state=initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_BOOKS: {
            console.log("dd",action)
            console.log("dds",state)
            return {...state,array: action.payload}
        }
        default:
            return state
    }
}