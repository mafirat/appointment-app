import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ILogin, IRegister } from "../../models";
import { AuthActionTypes, IAuthLoadingAction, IAuthLoginAction, IAuthLogoutAction, IAuthRegisterAction, IAuthState } from "../types/authTypes";
import { BaseRestUrls } from "../Urls";
import axios from "axios";

const loading: ActionCreator<IAuthLoadingAction> = () => {
  return {
    type: AuthActionTypes.LOADING
  };
};

const login: ActionCreator<
  ThunkAction<
    Promise<any>,
    IAuthState,
    null,
    IAuthLoginAction>> = (model: ILogin) => {
      return async (dispatch: Dispatch) => {
        const headers: { [key: string]: string } = {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        };
        console.log(BaseRestUrls.LOGIN);

        dispatch(loading());
        axios.post(BaseRestUrls.LOGIN, model, { headers: headers })
          .then(resp => {
            dispatch({
              type: AuthActionTypes.LOGIN,
              auth: resp.data
            });
          })
          .catch(err => {
            console.log("Error:", err.response);
          });
      };
    };

const register: ActionCreator<
  ThunkAction<
    Promise<any>,
    IAuthState,
    null,
    IAuthRegisterAction>> = (model: IRegister) => {
      return async (dispatch: Dispatch) => {
        const headers: { [key: string]: string } = {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        };
        dispatch(loading());
        axios.post(BaseRestUrls.REGISTER, model, { headers: headers })
          .then(resp => {
            dispatch({
              type: AuthActionTypes.REGISTER,
              auth: resp.data
            });
          })
          .catch(err => {
            console.log("Error:", err.response);
          });
      };
    };
const logout: ActionCreator<IAuthLogoutAction> = () => {
  return {
    type: AuthActionTypes.LOGOUT
  };
};
export { login, logout, register };