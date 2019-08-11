// Reducers
import { combineReducers } from 'redux';
import screenThread from '../Threads/screenThread';
import calculateThread from '../Threads/calculationThread';

const calculationReducer = ( calculate = [], action) => {
    if(action.type === "ADD_NUMBER"){
        calculateThread.update(action.payload);
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