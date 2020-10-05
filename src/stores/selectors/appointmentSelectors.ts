import { createSelector } from "reselect";
import { IApplicationState } from "../store";
const list = createSelector(
    (state: IApplicationState) => state,
    state => state.appointment.appointments
);

const get = (id: number) => (createSelector(
    (state: IApplicationState) => state,
    state => state.appointment.appointments.filter(a => a.id === id)[0]
));
const current = createSelector(
    (state: IApplicationState) => state,
    state => state.appointment.currentAppointment
);


export const appointmentSelectors = {
    list,
    get, current
}