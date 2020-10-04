import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IApplicationState } from "../store";
import { AppointmentActionTypes, IAppointmentGetAllAction, IAppointmentLoadingAction } from "../types/appointmentTypes";

const loading: ActionCreator<IAppointmentLoadingAction> = (type) => {
    return { type }
}

const getAllAppointments: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentGetAllAction>> = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.GET_ALL_REQUEST));
    }
}