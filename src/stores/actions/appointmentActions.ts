import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RestDataSource } from "../../utils/apiUtils";
import { IApplicationState } from "../store";
import { AppointmentActionTypes, IAppointmentGetAllAction, IAppointmentLoadingAction } from "../types/appointmentTypes";
const appointmentSource = new RestDataSource("APPOINTMENTS");

const loading: ActionCreator<IAppointmentLoadingAction> = (type) => {
    return { type }
}

const getAllAppointments: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentGetAllAction>> = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.GET_ALL_REQUEST));
        appointmentSource.GetData({}, getState().auth.getToken())
            .then(resp => {
                console.log("appointments: ", resp.data);
                
                dispatch({
                    type: AppointmentActionTypes.GET_ALL_SUCCESS,
                    appointments: resp.data
                })
            }).catch(() => {
                dispatch({
                    type: AppointmentActionTypes.GET_ALL_FAIL
                })
            })
    }
}


export const appointmentActions = {
    getAllAppointments
}