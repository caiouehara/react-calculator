// Reducers
import { combineReducers } from 'redux';
import calculationThread from '../Threads/calculationThread';

const calculationReducer = ( screenResult = "", action) => {
    if(action.type === "ADD_NUMBER"){
        screenResult = calculationThread.result;
    }
    return screenResult;
}

const screenReducer = ( screen = "", action) => {
    function update(){
        screen += action.payload;
    }
    function reset(){
        screen = "";
    }

    if(action.type === "ADD_NUMBER"){
        update();
    }
    if(action.type === "ADD_OPERATION"){
        calculationThread.start(screen, action.payload);
        update();
        reset();
    }
    return screen;
}

export default combineReducers({
    calculationReducer: calculationReducer,
    screenReducer: screenReducer,
});