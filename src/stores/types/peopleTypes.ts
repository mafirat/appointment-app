import { IPerson } from "../../models/person";

export enum PeopleActionTypes {
    GET_ALL_REQUEST = "people_request",
    GET_ALL_SUCCESS = "people_success",
    GET_ALL_FAIL = "people_fail",
}

export interface IPersonLoadingAction {
    type: PeopleActionTypes.GET_ALL_REQUEST;
}

export interface IPersonGetAllAction {
    type: PeopleActionTypes.GET_ALL_FAIL | PeopleActionTypes.GET_ALL_REQUEST
    | PeopleActionTypes.GET_ALL_SUCCESS;
    people: IPerson[];
}
export type PeopleActions = IPersonLoadingAction | IPersonGetAllAction;

export interface IPersonState {
    readonly listing: boolean;

    readonly people: IPerson[];
}