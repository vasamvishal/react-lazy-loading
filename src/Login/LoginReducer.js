
import {LOGIN,loginFailure,loginSucess,LOGINFAILURE,LOGINSUCESS} from "./LoginAction"
import {loginToStorage} from "./LoginEffect";
import { Cmd, loop } from "redux-loop";

export const initialState = {
    login:false,
    loginData:[],
    status:200
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            console.log("payload",action.payload);
            return loop(state, Cmd.run(loginToStorage, {
                successActionCreator: loginSucess,
                failActionCreator: loginFailure,
                args: [action.payload]
            }));
        }

        case LOGINSUCESS: {
            console.log("payloadsucess",action.payload);
            return {
                ...state,
                loginData: action.payload,
                // status:action.payload.status
            };
        }
        case LOGINFAILURE: {
            console.log("payloadsucess",action.payload);
            return {
                ...state,
                loginData:null,
                status:action.payload.status
            };
        }
        default:
            return state;
    }
}