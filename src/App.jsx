import {useState} from 'react';
import {SortingControl} from './SortingControl';
import {SELECT_STATES} from './consts';
import {UserList} from './UserList';

export const App = () => {
    const [sortBy, setSortBy] = useState(SELECT_STATES.DEFAULT);
    const handlerChange = (e) => {
        setSortBy(e.target.value)
    };
    return (
        <>
            <UserList sortBy={sortBy}/>
            <SortingControl value={sortBy} setValue={handlerChange}/>
        </>
    );
};