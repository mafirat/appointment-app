import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../layouts/authentication/Logout';
import { authSelectors } from '../stores/selectors/authSelectors';

export const Navbar: React.FunctionComponent = () => {
    const auth = useSelector(authSelectors.auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3">
            <Link className="navbar-brand" to="#">Appointment</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/people" className="nav-link">People</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                    </li>
                </ul>
                <span className="navbar-text mr-1">Welcome, {auth.auth?.username}</span>
                <Logout />
            </div>
        </nav>
    );
}

export default Navbar;