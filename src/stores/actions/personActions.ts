import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RestDataSource } from "../../utils/apiUtils";
import { IApplicationState } from "../store";
import { IPersonGetAllAction, IPersonLoadingAction, PeopleActionTypes } from "../types/peopleTypes";
const personSource = new RestDataSource("PERSON");

const loading: ActionCreator<IPersonLoadingAction> = (type) => {
    return { type }
}

const getAll: ActionCreator<ThunkAction<Promise<any>, IApplicationState, null, IPersonGetAllAction>> = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(loading(PeopleActionTypes.GET_ALL_REQUEST));
        personSource.GetData({}, getState().auth.getToken())
            .then(resp => {
                dispatch({
                    type: PeopleActionTypes.GET_ALL_SUCCESS,
                    people: resp.data
                })
            }).catch(() => {
                dispatch({
                    type: PeopleActionTypes.GET_ALL_FAIL
                })
            })
    }
}
export const PersonActions = {
    getAll
}