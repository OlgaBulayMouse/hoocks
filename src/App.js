import {
    useEffect,
    useState
} from 'react';

export const User = ({ id, name }) => {
    const [data, setData] = useState();
    const [isActive, setIsActive] = useState(false);

    const handlerClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(userData => {
                    setData(userData)
                }, [isActive, id])
        }
    });
    return (
        <li onClick={handlerClick}>
            {name}

            {isActive && data && (
                <div>
                    {data.email}
                </div>
            )}

        </li>
    )
};

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
                        id={user.id}
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