import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppointment } from "../../models/appointment";
import { RestDataSource } from "../../utils/apiUtils";
import { IApplicationState } from "../store";
import { AppointmentActionTypes, IAppointmentAddAction, IAppointmentDeleteAction, IAppointmentGetAllAction, IAppointmentGetSingleAction, IAppointmentLoadingAction, IAppointmentUpdateAction } from "../types/appointmentTypes";
const appointmentSource = new RestDataSource("APPOINTMENTS");

const loading: ActionCreator<IAppointmentLoadingAction> = (type) => {
    return { type }
}

const getAll: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentGetAllAction>> = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.GET_ALL_REQUEST));
        appointmentSource.GetData({}, getState().auth.getToken())
            .then(resp => {
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
const getSingle: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentGetSingleAction>> = (id: number) => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.GET_SINGLE_REQUEST));
        appointmentSource.GetData({ id }, getState().auth.getToken())
            .then(resp => {
                dispatch({
                    type: AppointmentActionTypes.GET_SINGLE_SUCCESS,
                    appointment: resp.data
                });
            }).catch(() => {
                dispatch({
                    type: AppointmentActionTypes.GET_SINGLE_FAIL
                });
            });
    };
};
const add: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentAddAction>> = (appointment: IAppointment) => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.ADD_REQUEST));
        appointmentSource.SetData({}, getState().auth.getToken(), appointment)
            .then(resp => {
                dispatch({
                    type: AppointmentActionTypes.ADD_SUCCESS,
                    appointment: resp.data
                });
            }).catch(() => {
                dispatch({
                    type: AppointmentActionTypes.ADD_FAIL
                });
            }
            );
    };
};
const update: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentUpdateAction>> = (appointment: IAppointment) => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.UPDATE_REQUEST));
        appointmentSource.UpdateData({}, getState().auth.getToken(), appointment, appointment.id)
            .then(resp => {
                dispatch({
                    type: AppointmentActionTypes.UPDATE_SUCCESS,
                    appointment: resp.data
                });
            }).catch(() => {
                dispatch({
                    type: AppointmentActionTypes.UPDATE_FAIL
                });
            }
            );
    };
};
const _delete: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IAppointmentDeleteAction>> = (appointmentId: number) => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(AppointmentActionTypes.DELETE_REQUEST));
        appointmentSource.DeleteData({}, getState().auth.getToken(), appointmentId)
            .then(() => {
                dispatch({
                    type: AppointmentActionTypes.DELETE_SUCCESS,
                    appointmentId
                });
            }).catch(() => {
                dispatch({
                    type: AppointmentActionTypes.DELETE_FAIL
                });
            }
            );
    };
};


export const appointmentActions = {
    getAll,
    getSingle,
    add,
    update,
    delete: _delete
}