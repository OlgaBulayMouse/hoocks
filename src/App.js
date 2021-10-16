//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';

export const App = () => {
    const [isActiv, setActive] = useState(false);
    const colorControl = () => {
        setActive(!isActiv)
    };
    return (
        <div onClick={colorControl} style={{color: isActiv && 'red'}}>
            Hello!
        </div>
    );
};