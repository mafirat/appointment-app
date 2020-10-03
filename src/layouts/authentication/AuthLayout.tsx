import * as React from 'react';

interface IProps {
    Component: React.ComponentType<any>;
}

export const AuthLayout: React.FunctionComponent<IProps> = ({ Component }) => {
    return (
        <div className="container">
            <Component />
        </div>
    );
};