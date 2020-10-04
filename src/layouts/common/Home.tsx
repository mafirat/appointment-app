import * as React from 'react';
import Appointments from './appointment/Appointments';
interface IProps {

}

export const Home: React.FunctionComponent<IProps> = () => {
    return (
        <div className="row">
            <div className="col-md-5">
                <h4>Add New Appointment</h4>
                <hr />
            </div>
            <div className="col-md-7">
                <h4>Appointments</h4>
                <hr />
                <Appointments />
            </div>

        </div>
    );
}