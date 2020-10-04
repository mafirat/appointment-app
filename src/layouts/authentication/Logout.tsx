import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../stores/actions/authActions';
const Logout: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
    }
    return (
        <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={logOut}>Logout</button>
    );
}

export default Logout;