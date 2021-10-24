import {
    useEffect,
    useState
} from 'react';
import { User } from './User';
import { SELECT_STATES } from './consts';

export const UserList = ({ sortBy }) => {
    let [users, setUsers] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const handlerAddToFavorites = id => {
        const newFavorites = [...favorites];
        newFavorites.push(id);
        setFavorites(newFavorites)
    }

    const handler = () => {
        switch (sortBy) {
            case SELECT_STATES.INCREASE:
                setUsers(prevUsers => {
                    const newUsers = [...prevUsers];
                    newUsers.sort(
                        (a, b) => a.name.localeCompare(b.name));
                    return newUsers;
                });
                break;

            case SELECT_STATES.DECREASE:
                setUsers(prevUsers => {
                    const newUsers = [...prevUsers];
                    newUsers.sort(
                        (a, b) => b.name.localeCompare(a.name));
                    return newUsers;
                });
                break;
            case SELECT_STATES.DEFAULT:
                default:
                    break;
        };
    };

    useEffect(handler, [sortBy]);

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
                        addToFavorites={handlerAddToFavorites}
                        isFavorite={favorites.find(item => item === user.id)}
                    />)
                }
            </ul>)
    );
};