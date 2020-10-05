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
            return { ...state, listing: false, appointments: [] };

        case AppointmentActionTypes.GET_SINGLE_REQUEST:
            return { ...state, getting: true };
        case AppointmentActionTypes.GET_SINGLE_SUCCESS:
            return { ...state, getting: false, currentAppointment: action.appointment };
        case AppointmentActionTypes.GET_SINGLE_FAIL:
            return { ...state, getting: false, currentAppointment: null };

        case AppointmentActionTypes.ADD_REQUEST:
            return { ...state, adding: true };
        case AppointmentActionTypes.ADD_SUCCESS:
            return { ...state, adding: false, appointments: [...state.appointments, action.appointment] };
        case AppointmentActionTypes.ADD_FAIL:
            return { ...state, adding: false };

        case AppointmentActionTypes.UPDATE_REQUEST:
            return { ...state, updating: true };
        case AppointmentActionTypes.UPDATE_SUCCESS:
            return { ...state, updating: false, appointments: state.appointments.map(c => (c.id === action.appointment.id) ? action.appointment : c) };
        case AppointmentActionTypes.UPDATE_FAIL:
            return { ...state, updating: false };

        case AppointmentActionTypes.DELETE_REQUEST:
            return { ...state, deleting: true };
        case AppointmentActionTypes.DELETE_SUCCESS:
            const appointments = state.appointments.filter(c => c.id !== action.appointmentId);
            return { ...state, deleting: false, appointments };
        case AppointmentActionTypes.DELETE_FAIL:
            return { ...state, deleting: false };
        default:
            return state;
    }
}