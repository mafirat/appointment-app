import * as React from 'react';
import { IAppointment } from '../../../models/appointment';

export interface IProps {
    appointment: IAppointment
}
const badgeClass: { [key: string]: string } = {
    Waiting: "badge badge-secondary badge-pill",
    Completed: "badge badge-success badge-pill",
    Active: "badge badge-warning badge-pill",

}
export const AppointmentListItem: React.FunctionComponent<IProps> = ({ appointment }) => {
    const { title, status } = appointment;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {title}<span className={badgeClass[status]}>{status}</span>
        </li>
    );
}
