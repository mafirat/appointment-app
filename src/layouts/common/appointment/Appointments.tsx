import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentActions } from '../../../stores/actions/appointmentActions';
import { appointmentSelectors } from '../../../stores/selectors/appointmentSelectors';
import { AppointmentListItem } from './AppointmentListItem';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Edit from './Edit';
import { IAppointment } from '../../../models/appointment';

const Appointments: React.FunctionComponent = () => {
    const [modalState, setModalState] = useState(false)
    const [selected, setSelected] = useState<IAppointment>()
    const dispatch = useDispatch();
    const appointments = useSelector(appointmentSelectors.list);
    useEffect(() => {
        if (appointments.length < 1) {
            dispatch(appointmentActions.getAll())
        }
    }, [dispatch]);
    const toggleState = () => {
        setModalState(!modalState)
    }
    const onItemClick = (id: number) => {
        setSelected(appointments.filter(a => a.id === id)[0]);
        toggleState();
    }
    const _deleteHandler = (id: number) => {
        if (window.confirm("Are you sure to delete this appointment?")) {
            dispatch(appointmentActions.delete(id));
            toggleState();
        }
    }
    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    appointments.map(a => (<AppointmentListItem key={a.id} appointment={a} onClick={(id: number) => onItemClick(a.id)} />))
                }
            </ul>

            <Modal isOpen={modalState} toggle={toggleState} unmountOnClose={true}>
                <ModalHeader toggle={toggleState}>{selected?.title}</ModalHeader>
                <ModalBody>
                    {selected && <Edit appointment={selected} deleteHandler={_deleteHandler} />}
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export default Appointments;