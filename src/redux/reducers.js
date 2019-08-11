// Reducers
import { combineReducers } from 'redux';
import screenThread from '../Threads/screenThread';
import calculateThread from '../Threads/calculationThread';

const calculationReducer = ( calculate = [], action) => {
    if(action.type === "ADD_NUMBER"){
        calculateThread.update(action.payload);
    }
    if(action.type === "ADD_OPERATION"){
        calculateThread.calculate(action.payload);
    }
    return calculate;
}

const screenReducer = ( screen = "", action) => {
    function update(){
        screenThread.update(action.payload);
        screen = screenThread.screen;
    }
    if(action.type === "ADD_NUMBER"){
        update();
    }
    if(action.type === "ADD_OPERATION"){
        update();
    }
    return screen;
}

export default combineReducers({
    calculationReducer: calculationReducer,
    screenReducer: screenReducer,
});