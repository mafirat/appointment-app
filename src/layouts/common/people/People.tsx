import React from 'react';
import PersonList from './PersonList';

const People: React.FunctionComponent = () => {

    return (
        <div className="container p-3">
            <button type="button" onClick={() => alert("This feature not implemented yet")}
            className="btn btn-outline-primary">Add Person</button>
            <hr />
            <PersonList />
        </div>
    );
}

export default People;