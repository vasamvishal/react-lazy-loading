
import { registerSucess, REGISTER_SUCESS, REGISTER_PAGE, REGISTER_FAILURE, registerFailure } from "./RegistrationAction"
import { registerUser } from "./RegistrationEffect";
import { Cmd, loop } from "redux-loop";

export const initialState = {
    registerData: false,
    status:200
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_PAGE: {
            return loop(state, Cmd.run(registerUser, {
                successActionCreator: registerSucess,
                failActionCreator: registerFailure,
                args: [action.payload]
            }));
        }

        case REGISTER_SUCESS: {
            return { ...state, registerData: true,status:action.payload.status}
        }

        case REGISTER_FAILURE: {
            return { ...state, registerData: false }
        }

        default: {
            return state;
        }
    }
}