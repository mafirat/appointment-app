import { createSelector } from "reselect";
import { IApplicationState } from "../store";
const list = createSelector(
    (state: IApplicationState) => state,
    state => state.appointment.appointments
);


export const appointmentSelectors = {
    list
}