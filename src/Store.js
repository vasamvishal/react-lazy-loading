import reducers from "./reducer"
import {compose, createStore} from "redux";
import {install} from "redux-loop";

const store = createStore(reducers, undefined, compose(install()));

export default store;