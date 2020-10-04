import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Navbar } from '../../components';
import { authSelectors } from '../../stores/selectors/authSelectors';

interface IProps {
    Component: React.ComponentType<any>;
}

export const CommonLayout: React.FunctionComponent<IProps> = ({ Component }) => {
    const isLogged: boolean = useSelector(authSelectors.auth).isAuthenticated;
    if (isLogged === false) {
        return <Redirect to="/login" />
    }
    return (
        <div className="container common">
            <Navbar />
            <div className="container bg-white rounded p-2">
                <Component />
            </div>
        </div>
    );
};