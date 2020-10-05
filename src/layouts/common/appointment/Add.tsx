import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { IAppointment } from '../../../models/appointment';
import { appointmentActions } from '../../../stores/actions/appointmentActions';
import { PersonActions } from '../../../stores/actions/personActions';
import { personSelectors } from '../../../stores/selectors/personSelectors';

const Add: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const persons = useSelector(personSelectors.list);
    useEffect(() => {
        dispatch(PersonActions.getAll())
    }, []);
    const [model, setModel] = useState<IAppointment>(
        {
            createdAt: "", description: "", end: "", id: 0,
            notes: "", personId: 0, start: "", status: "Waiting", title: "", userId: 0
        })
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(appointmentActions.add(model))

    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
                <input type="text" className="form-control" name="title" placeholder="Title" required onChange={changeHandler} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" name="description" placeholder="Description" required onChange={changeHandler} />
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
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput />
            </div>
            <div className="form-group">
                <label >End</label>
                <DatePicker selected={model.end !== "" ? new Date(model.end) : null}
                    onChange={(a: Date) => dateChangeHandler(a, "end")}
                    wrapperClassName="form-control" className="form-control"
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput />
            </div>
            <button type="submit" className="btn btn-outline-success">Save</button>
        </form>
    );
}

export default Add;