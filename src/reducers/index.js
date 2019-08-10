// Reducers
import { combineReducers } from 'redux';

// Log of Operations
let operationsHistory = [];

const numbersThread = (screenNumber = [""], action) => {

    // Creating New Numbers on Screen 
    if (action.type === 'ADD_SCREEN_NUMBER') {
        return screenNumber += action.payload;
    }
    
    // Reseting Numbers
    else if (action.type === 'RESET_NUMBERS_THREAD') {
        return screenNumber = [""];
    }

    // redux ask a return
    return screenNumber;
}

export default combineReducers({
    numbersThread: numbersThread,
});