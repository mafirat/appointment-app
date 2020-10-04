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
        const t = state.auth?.accessToken;
        return t !== undefined ? t : "";
    }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
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
        case AuthActionTypes.REGISTER:
            return {
                ...state,
                auth: action.auth,
                loading: false,
                isAuthenticated: true
            }
        default:
            return state;
    }
};