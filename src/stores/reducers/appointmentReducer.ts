import { Reducer } from "redux";
import { AppointmentActions, AppointmentActionTypes, IAppointmentState } from "../types/appointmentTypes";

const initState: IAppointmentState = {
    adding: false,
    deleting: false,
    listing: false,
    updating: false,
    getting: false,
    currentAppointment: null,
    appointments: []
}
export const appointmentReducer: Reducer<IAppointmentState, AppointmentActions> = (state = initState, action) => {
    switch (action.type) {
        case AppointmentActionTypes.GET_ALL_REQUEST:
            return { ...state, listing: true };
        case AppointmentActionTypes.GET_ALL_SUCCESS:
            return { ...state, listing: false, appointments: action.appointments };
        case AppointmentActionTypes.GET_ALL_FAIL:
            return { ...state, listing: false, appointments: [] }
        default:
            return state;
    }
}