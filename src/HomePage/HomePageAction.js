export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS"
export const SET_INITIALSTATE = "SET_INITIALSTATE"
export const SEARCH_BOOKS = "SEARCH_BOOKS"
export const SEARCH_BOOKS_VALUE = "SEARCH_BOOKS_VALUE"
export const SEARCH_BOOKS_FAILURE = "SEARCH_BOOKS_FAILURE"
export const SELECTED_BOOKS = "SELECTED_BOOKS"
export const SET_STATE = "SET_STATE"

export const selectedBook = (item) => ({
    type: SELECTED_BOOKS,
    payload: item
})

export const setState = () => ({
    type: SET_STATE,
})

export const setIntialState = () => ({
    type: SET_INITIALSTATE
})

export const getBooksSucces = (payload) => ({
    type: GET_BOOKS_SUCCESS,
    payload
});

export const onSearchValue = (payload) => ({
    type: SEARCH_BOOKS,
    payload
});

export const searchBooksValue = (payload) => ({
    type: SEARCH_BOOKS_VALUE,
    payload
});

export const searchBooksFailureAction = (payload) => ({
    type: SEARCH_BOOKS_FAILURE,
    payload
});

