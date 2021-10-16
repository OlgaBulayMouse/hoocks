//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';
export const App = () => {
    const [content, setContent] = useState('Hello!');
    const handlerClick = () => {
        setContent('Click happend!')
    };
    return (
        <div onClick={handlerClick}>
            {content}
        </div>
    );
};