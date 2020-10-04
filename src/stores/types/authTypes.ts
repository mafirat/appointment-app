import { IAuth } from "../../models";

export enum AuthActionTypes {
    LOGIN = "auth_login",
    REGISTER = "auth_register",
    LOADING = "auth_loading",
    LOGOUT = "auth_logout"
}

export interface IAuthLoginAction {
    type: AuthActionTypes.LOGIN;
    auth: IAuth;
}

export interface IAuthLogoutAction {
    type: AuthActionTypes.LOGOUT;
}

export interface IAuthLoadingAction {
    type: AuthActionTypes.LOADING;
}

export interface IAuthRegisterAction {
    type: AuthActionTypes.REGISTER;
    auth: IAuth;
}

export type AuthActions = IAuthLoginAction | IAuthLoadingAction
    | IAuthLogoutAction | IAuthRegisterAction;

export interface IAuthState {
    readonly loading: boolean;
    readonly isAuthenticated: boolean;
    readonly auth: IAuth | null;
    getToken: () => string;
}