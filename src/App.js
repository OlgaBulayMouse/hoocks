//import logo from './logo.svg';
//import './App.css';
import {
    useMemo,
    useState
} from 'react';

export const RandomNumber = ({isShowRandom}) => {
    const r = useMemo(() => {
        const Arr = [];
        const NumsofArray = 9999999;
        for (let i = 0; i < NumsofArray; i++) {
            Arr.push(Math.random())
        };
        return [Math.round(Math.random() * NumsofArray)]
    }, []);
    return (
        isShowRandom ? (
        <div>
            {r}
        </div>
        ) : null
    );
};
export const App = () => {
    const [isShowRandom, setIsShowRandom] = useState(false);
    const handlerClick = () => {
        setIsShowRandom(!isShowRandom)
    };
    return (
        <div onClick={handlerClick}>
            Hello! I am reactComponent!
            <RandomNumber isShowRandom={isShowRandom}/>
        </div>
    );
};