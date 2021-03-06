import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { IAppointment } from '../../../models/appointment';
import { appointmentActions } from '../../../stores/actions/appointmentActions';
import { PersonActions } from '../../../stores/actions/personActions';
import { personSelectors } from '../../../stores/selectors/personSelectors';

export interface IProps {
    appointment: IAppointment;
    deleteHandler: (id: number) => void;
}
const Edit: React.FunctionComponent<IProps> = ({ appointment, deleteHandler }) => {
    const dispatch = useDispatch();
    const persons = useSelector(personSelectors.list);
    useEffect(() => {
        dispatch(PersonActions.getAll())
    }, []);
    const [model, setModel] = useState<IAppointment>({ ...appointment });
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(appointmentActions.update(model))
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setModel({ ...model, [e.target.name]: e.target.value })
    }
    const dateChangeHandler = (date: Date, name: string) => {
        const nModel = { ...model, [name]: date }
        setModel(nModel)
    }
    const personList = persons.map(p => (<option key={p.id} value={p.id}>{`${p.name} ${p.lastname}`}</option>))
    return (

        <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" placeholder="Title" required
                    onChange={changeHandler} value={model.title} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" name="description" placeholder="Description" required
                    onChange={changeHandler} value={model.description} />
            </div>
            <div className="form-group">
                <label >With</label>
                <select className="form-control" name="personId"
                    placeholder="Choose person"
                    value={model.personId} onChange={changeHandler}>
                    <option value={0}>Choose person</option>
                    {personList}
                </select>
            </div>
            <div className="form-group">
                <label >Start</label>
                <DatePicker selected={model.start !== "" ? new Date(model.start) : null}
                    onChange={(a: Date) => dateChangeHandler(a, "start")}
                    wrapperClassName="form-control" className="form-control"
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeInput />
            </div>
            <div className="form-group">
                <label >End</label>
                <DatePicker selected={model.end !== "" ? new Date(model.end) : null}
                    onChange={(a: Date) => dateChangeHandler(a, "end")}
                    wrapperClassName="form-control" className="form-control"
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeInput />
            </div>
            <div className="form-group">
                <label>Status</label>
                <select className="form-control" name="status"
                    placeholder="Choose status"
                    value={model.status} onChange={changeHandler}>
                    <option value="Waiting">Waiting</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="form-group">
                <label>Notes</label>
                <textarea className="form-control" name="notes" placeholder="Notes"
                    onChange={changeHandler} value={model.notes} style={{ minHeight: 70, maxHeight: 120 }} />
            </div>
            <button type="submit" className="btn btn-outline-success">Update</button>
            <button type="button" className="btn  btn-link" onClick={() => deleteHandler(model.id)}>Delete</button>
        </form>
    );
}

export default Edit;