import {SELECT_STATES} from './consts';
export const SortingControl = ({value, setValue}) => (
        <select value={value} onChange={setValue}>
            <option disabled value={SELECT_STATES.DEFAULT}>Sort by</option>
            <option value={SELECT_STATES.INCREASE}>Increase</option>
            <option value={SELECT_STATES.DECREASE}>Decrease</option>
        </select>
);