import * as React from 'react';
import { IAppointment } from '../../../models/appointment';

export interface IProps {
    appointment: IAppointment
    onClick: (id: number) => void;
}
const badgeClass: { [key: string]: string } = {
    Waiting: "badge badge-secondary badge-pill",
    Completed: "badge badge-success badge-pill",
    Active: "badge badge-warning badge-pill",

}
export const AppointmentListItem: React.FunctionComponent<IProps> = ({ appointment, onClick }) => {
    const { title, status, id } = appointment;
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }} onClick={() => onClick(id)}>
            {title}<span className={badgeClass[status]}>{status}</span>
        </li>
    );
}
