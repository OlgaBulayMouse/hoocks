//import logo from './logo.svg';
//import './App.css';
import {
    useState
} from 'react';


export const Users = (isShow) => {
    let [users, setUsers] = useState([]);
    if(!users.length) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        });
    }
    return (
        <div >
            {isShow && users.map(user => user.name)}
        </div>
    );
};

export const App = () => {
const [isShow, setIsShow] = useState();
    return (
        <div onClick={() => setIsShow(!isShow)}>
            {!isShow && 'Click to fetch users'}
            <Users isShow={isShow}/>
        </div>
    );
};