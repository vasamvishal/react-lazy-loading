import { SELECTED_BOOKS, GET_BOOKS_SUCCESS,SEARCH_BOOKS_FAILURE, getBooksSucces, SET_INITIALSTATE, SEARCH_BOOKS, SEARCH_BOOKS_VALUE, searchBooksValue,searchBooksFailureAction} from "./HomePageAction"
import { Cmd, loop } from "redux-loop";
import { extractDataFromStorage, searchBooksForData } from "./HomePageEffect";


export const initialState = {
    selectedBook: [],
    storeData: false,
    getAllBookData: [],
    searchBook: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_BOOKS: {
            console.log("sdsaaD", state.storeData);
            console.log("sdsaaDsadd", action.payload);
            return { ...state, selectedBook: action.payload, storeData: true }
        }

        case SET_INITIALSTATE: {
            console.log("initial statedsadasdsad");
            return loop(initialState, Cmd.run(extractDataFromStorage, {
                successActionCreator: getBooksSucces,
                failActionCreator: searchBooksFailureAction
            }));
        }
        case GET_BOOKS_SUCCESS: {
            console.log("action", action.payload);
            return {
                ...state,
                getAllBookData: action.payload
            };
        }
        case SEARCH_BOOKS_FAILURE: {
            return {
                ...state,
                getAllBookData: null
            };
        }
        case SEARCH_BOOKS: {
            console.log("action", action.payload.target.value);
            return loop(state, Cmd.run(searchBooksForData, {
                successActionCreator: searchBooksValue
            }));
        }
        case SEARCH_BOOKS_VALUE: {
            console.log("action", action.payload.target.value);
            const searchData = searchBooksForData(action.payload)
            return { ...state, searchBook: searchData }
        }

        default:
            return state
    }
}