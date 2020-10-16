import { GET_BOOKS_SUCCESS,SELECTED_BOOKS,SEARCH_BOOKS_FAILURE, getBooksSucces, SET_INITIALSTATE, searchBooksFailureAction } from "./HomePageAction"
import { Cmd, loop } from "redux-loop";
import { extractDataFromStorage } from "./HomePageEffect";


export const initialState = {
    storeData: false,
    getAllBookData: [],
    searchBook: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_BOOKS: {
            return { ...state, selectedBook: action.payload, storeData: !state.storeData }
        }
        case SET_INITIALSTATE: {
            return loop(initialState, Cmd.run(extractDataFromStorage, {
                successActionCreator: getBooksSucces,
                failActionCreator: searchBooksFailureAction
            }));
        }
        case GET_BOOKS_SUCCESS: {
            return {
                ...state,
                getAllBookData: action.payload,
                storeData: false
            };
        }
        case SEARCH_BOOKS_FAILURE: {
            return {
                ...state,
                getAllBookData: []
            };
        }
        default:
            return state
    }
}