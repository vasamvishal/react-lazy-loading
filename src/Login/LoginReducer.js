
import {LOGIN,loginFailure,loginSucess,LOGINFAILURE,LOGINSUCESS} from "./LoginAction"
import {loginToStorage} from "./LoginEffect";
import { Cmd, loop } from "redux-loop";

export const initialState = {
    loginData:[],
    status:200,
    login:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return loop(state, Cmd.run(loginToStorage, {
                successActionCreator: loginSucess,
                failActionCreator: loginFailure,
                args: [action.payload]
            }));
        }

        case LOGINSUCESS: {
            return {
                ...state,
                loginData: action.payload,
                status:action.payload.status,
                login:true
            };
        }
        case LOGINFAILURE: {
            return {
                ...state,
                loginData:[],
                status:action.payload.status,
                login:false
            };
        }
        default:
            return state;
    }
}