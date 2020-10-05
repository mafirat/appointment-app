import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { PersonActions } from '../../../stores/actions/personActions';
import { personSelectors } from '../../../stores/selectors/personSelectors';

const PersonList: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const people = useSelector(personSelectors.all);
    useEffect(() => {
        dispatch(PersonActions.getAll())
    }, []);
    console.log(people);

    return (
        <React.Fragment>
            {
                !people.listing ? (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                people.people.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.lastname}</td>
                                    </tr>))
                            }
                        </tbody>
                    </table>
                ) : (<Spinner />)
            }
        </React.Fragment>
    );
}

export default PersonList;