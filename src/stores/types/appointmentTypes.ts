import { IAppointment } from "../../models/appointment";

export enum AppointmentActionTypes {
    GET_ALL_REQUEST = "appointment_all_request",
    GET_ALL_SUCCESS = "appointment_all_success",
    GET_ALL_FAIL = "appointment_all_fail",

    GET_SINGLE_REQUEST = "appointment_single_request",
    GET_SINGLE_SUCCESS = "appointment_single_success",
    GET_SINGLE_FAIL = "appointment_single_fail",

    ADD_REQUEST = "appointment_add_request",
    ADD_SUCCESS = "appointment_add_success",
    ADD_FAIL = "appointment_add_fail",

    DELETE_REQUEST = "appointment_delete_request",
    DELETE_SUCCESS = "appointment_delete_success",
    DELETE_FAIL = "appointment_delete_fail",

    UPDATE_REQUEST = "appointment_update_request",
    UPDATE_SUCCESS = "appointment_update_success",
    UPDATE_FAIL = "appointment_update_fail"
}

export interface IAppointmentLoadingAction {
    type: AppointmentActionTypes.ADD_REQUEST | AppointmentActionTypes.DELETE_REQUEST
    | AppointmentActionTypes.UPDATE_REQUEST | AppointmentActionTypes.GET_ALL_REQUEST
    | AppointmentActionTypes.GET_SINGLE_REQUEST;
}

export interface IAppointmentGetAllAction {
    type: AppointmentActionTypes.GET_ALL_FAIL | AppointmentActionTypes.GET_ALL_REQUEST
    | AppointmentActionTypes.GET_ALL_SUCCESS;
    appointments: IAppointment[];
}

export interface IAppointmentGetSingleAction {
    type: AppointmentActionTypes.GET_SINGLE_FAIL | AppointmentActionTypes.GET_SINGLE_REQUEST | AppointmentActionTypes.GET_SINGLE_SUCCESS;
    appointment: IAppointment | null;
}

export interface IAppointmentAddAction {
    type: AppointmentActionTypes.ADD_FAIL | AppointmentActionTypes.ADD_REQUEST | AppointmentActionTypes.ADD_SUCCESS;
    appointment: IAppointment;
}
export interface IAppointmentUpdateAction {
    type: AppointmentActionTypes.UPDATE_FAIL | AppointmentActionTypes.UPDATE_REQUEST | AppointmentActionTypes.UPDATE_SUCCESS;
    appointment: IAppointment;
}

export interface IAppointmentDeleteAction {
    type: AppointmentActionTypes.DELETE_FAIL | AppointmentActionTypes.DELETE_REQUEST | AppointmentActionTypes.DELETE_SUCCESS;
    appointmentId: number;
}

export type AppointmentActions = IAppointmentLoadingAction | IAppointmentGetAllAction | IAppointmentGetSingleAction | IAppointmentAddAction | IAppointmentUpdateAction | IAppointmentDeleteAction;

export interface IAppointmentState {
    readonly listing: boolean;
    readonly getting: boolean;
    readonly adding: boolean;
    readonly updating: boolean;
    readonly deleting: boolean;

    readonly appointments: IAppointment[];
    readonly currentAppointment: IAppointment | null;
}