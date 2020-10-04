import { Reducer } from "redux";
import { IAuthState, AuthActions, AuthActionTypes } from "../types/authTypes";

const initialState: IAuthState = {
    loading: false,
    isAuthenticated: false,
    auth: null,
    getToken: () => "",
};

export const authReducer: Reducer<IAuthState, AuthActions> = (state = initialState, action) => {
    state.getToken = () => {
        const t = state.auth?.accesToken;
        return t !== undefined ? t : "";
    }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            console.log("login response: ", action.auth);
            return {
                ...state,
                auth: action.auth,
                loading: false,
                isAuthenticated: true
            };
        case AuthActionTypes.LOGOUT:
            return initialState;
        case AuthActionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};