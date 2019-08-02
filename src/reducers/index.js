// Reducers
import { combineReducers } from 'redux';

// Log of Operations
let operationsHistory = [];

// data for Numbers and operations
let operationsToDo = [];

const numbersThread = (screenNumber = [""], action) => {

    // Creating New Numbers on Screen 
    if (action.type === 'ADD_SCREEN_NUMBER') {
        return screenNumber += action.payload;
    }

    if (action.type === 'OPERATION_METHOD') {
        operationsToDo.push(parseInt(screenNumber), action.payload);
        console.log(operationsToDo);
        return screenNumber = "";
    }

    // Reseting Numbers
    else if (action.type === 'RESET_NUMBERS_THREAD') {
        return screenNumber = [];
    }

    return screenNumber;
}

export default combineReducers({
    numbersThread: numbersThread,
});