
import {LOGOUT} from "./PopupButtonAction";
import {logout} from "./PopupButtonEffect";

export const initialState = {
    logout:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT: {
            logout();
         return { ...state, logout: true }
        }

        default:{
            return state
        }
    }
}
