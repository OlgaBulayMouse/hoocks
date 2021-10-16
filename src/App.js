//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';

export const App = () => {
    const [state, setState] = useState(0);
    const handlerClick = () => {
        setState(state + 1)
    };
    return (
        <div onClick={handlerClick}>
            {state}
        </div>
    );
};