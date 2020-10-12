
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
            console.log("payload",action.payload);
            return loop(state, Cmd.run(loginToStorage, {
                successActionCreator: loginSucess,
                failActionCreator: loginFailure,
                args: [action.payload]
            }));
        }

        case LOGINSUCESS: {
            console.log("payloadsucess",action.payload.status);
            return {
                ...state,
                loginData: action.payload,
                status:action.payload.status,
                login:true
            };
        }
        case LOGINFAILURE: {
            console.log("loginFailure",action.payload);
            return {
                ...state,
                loginData:null,
                status:action.payload.status,
                login:false
            };
        }
        default:
            return state;
    }
}