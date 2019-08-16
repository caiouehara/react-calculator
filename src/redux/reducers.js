// Reducers
import { combineReducers } from 'redux';
import calculationThread from '../Threads/calculationThread';

const calculationReducer = ( screenResult = 0, action) => {
    function setScreenResult(){
        screenResult = calculationThread.result;
    }
    if(action.type === "ADD_OPERATION"){
        setScreenResult();
    }
    return screenResult;
}

const screenReducer = ( screen = "", action) => {  
    function update(){
        screen += action.payload;
        calculationThread.workingNumber += action.payload;
    }
    function resetWorkingNumber(){
        calculationThread.workingNumber = "";
    }    
    if(action.type === "ADD_NUMBER"){
        update();
    }
    if(action.type === "ADD_OPERATION"){
        calculationThread.start( calculationThread.workingNumber, action.payload);
        resetWorkingNumber();
        update();
    }
    return screen;
}

export default combineReducers({
    screenReducer: screenReducer,
    calculationReducer: calculationReducer,
});