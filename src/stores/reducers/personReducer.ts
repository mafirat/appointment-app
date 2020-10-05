import { Reducer } from "redux";
import { IPersonState, PeopleActions, PeopleActionTypes } from "../types/peopleTypes";

const initState: IPersonState = {
    listing: false,
    people: []
}
export const personReducer: Reducer<IPersonState, PeopleActions> = (state = initState, action) => {
    switch (action.type) {
        case PeopleActionTypes.GET_ALL_REQUEST:
            return { ...state, listing: true };
        case PeopleActionTypes.GET_ALL_SUCCESS:
            return { ...state, listing: false, people: action.people };
        case PeopleActionTypes.GET_ALL_FAIL:
            return { ...state, listing: false, people: [] };
        default:
            return state;
    }
}