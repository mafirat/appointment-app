import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentActions } from '../../../stores/actions/appointmentActions';
import { appointmentSelectors } from '../../../stores/selectors/appointmentSelectors';
import { AppointmentListItem } from './AppointmentListItem';

const Appointments: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const appointments = useSelector(appointmentSelectors.list);
    useEffect(() => {
        if (appointments.length < 1) {
            dispatch(appointmentActions.getAllAppointments())
        }
    }, [dispatch])
    return (
        <ul className="list-group">
            {
                appointments.map(a => (<AppointmentListItem key={a.id} appointment={a} />))
            }
        </ul>
    );
}

export default Appointments;