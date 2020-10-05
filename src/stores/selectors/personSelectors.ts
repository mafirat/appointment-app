import { createSelector } from "reselect";
import { IApplicationState } from "../store";

const all = createSelector(
    (state: IApplicationState) => state,
    state => state.person
);

const list = createSelector(
    (state: IApplicationState) => state,
    state => state.person.people
);

export const personSelectors = {
    list,
    all
}