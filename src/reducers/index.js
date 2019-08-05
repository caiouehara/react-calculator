// Reducers
import { combineReducers } from 'redux';

// Log of Operations
let operationsHistory = [];

// data for Numbers and operations
let operationsToDo = [];
let results = [];
// Do Operation
function operationsThread(operationsToDo){
    // Single Operation
    if(operationsToDo.length === 4){
        operationsToDo.reduce((accumulator, actualValue, index, array) => {
            if(actualValue === "SUM"){
                results.push(accumulator + array[index+1]);
            }
        });
    }
}

const numbersThread = (screenNumber = [""], action) => {

    // Creating New Numbers on Screen 
    if (action.type === 'ADD_SCREEN_NUMBER') {
        return screenNumber += action.payload;
    }

    if (action.type === 'OPERATION_METHOD') {
        operationsToDo.push(parseInt(screenNumber), action.payload);
        console.log(operationsToDo)
        operationsThread(operationsToDo);

        // reseting operation ( have to fix this shit )
        if(operationsToDo.length === 4){
            operationsToDo = [];
            // Bugging Undefined (NAN), 4 in reduce couting, count a null.
            results.splice(-1,1);
            console.log(results);
        }

        return screenNumber = "";
    }

    // Reseting Numbers
    else if (action.type === 'RESET_NUMBERS_THREAD') {
        return screenNumber = [""];
    }

    return screenNumber;
}

export default combineReducers({
    numbersThread: numbersThread,
});