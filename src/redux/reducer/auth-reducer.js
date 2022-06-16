import { authActions, authState } from "../action/auth-action"

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case authActions.LOGIN:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default authReducer;