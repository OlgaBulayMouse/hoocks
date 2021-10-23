import {
    useEffect,
    useState
} from 'react';
import { User } from './User';
import { SELECT_STATES } from './consts';

export const UserList = ({ sortBy }) => {
    let [users, setUsers] = useState([]);

    const handler = () => {
        switch (sortBy) {

            case SELECT_STATES.INCREASE:
                setUsers(users.sort((a, b) => a.name.localeCompare(b.name)))
                break;
            case SELECT_STATES.DECREASE:
                setUsers(users.sort((a, b) => b.name.localeCompare(a.name)))
                break;
            case SELECT_STATES.DEFAULT:
            default:
                break;
        };
    };

    useEffect(handler, [sortBy, users]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, []);
    return (
        !users.length ? ('No users!') : (
            <ul>
                {users.map(user =>
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                    />)
                }
            </ul>)
    );
};