import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../layouts/authentication/Logout';

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-3">
            <Link className="navbar-brand" to="#">Appointment</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link">Ana Sayfa <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">Profilim</NavLink>
                    </li>
                </ul>
                <Logout />
            </div>
        </nav>
    );
}

export default Navbar;