// Reducers
import { combineReducers } from 'redux';
import screenThread from '../Threads/screenThread';

const calculationReducer = ( calculate = [], action) => {
    if(action.type === "ADD_NUMBER"){
        calculate.push(parseInt(action.payload));
    }
    return calculate;
}

const screenReducer = ( screen = "", action) => {
    if(action.type === "ADD_NUMBER"){
        screenThread.update(action.payload);
        screen = screenThread.screen;
    }
    return screen;
}

export default combineReducers({
    calculationReducer: calculationReducer,
    screenReducer: screenReducer,
});