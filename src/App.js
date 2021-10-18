import {
    useEffect,
    useState
} from 'react';

export const User = ({ name }) => {
    return (
        <li>
            {name}
        </li>
    )
}

export const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            }, []);
    });
    return (
        !users.length ? ('No users!') : (
            <ul>
                {users.map(user =>
                    <User
                        key={user.id}
                        name={user.name}
                    />)
                }
            </ul>)
    );
};

export const App = () => {
    return (
        <div>
            <Users />
        </div>
    );
};