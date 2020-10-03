import * as React from 'react';
import { Navbar } from '../../components';

interface IProps {
    Component: React.ComponentType<any>;
}

export const CommonLayout: React.FunctionComponent<IProps> = ({ Component }) => {
    return (
        <div className="container common">
            <Navbar />
            <div className="container bg-white rounded">
                <Component />
            </div>
        </div>
    );
};