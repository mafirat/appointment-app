import { createSelector } from "reselect";
import { IApplicationState } from "../store";
const auth = createSelector(
    (state: IApplicationState) => state,
    state => state.auth
);


export const authSelectors = {
    auth
}