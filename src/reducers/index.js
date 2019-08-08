// Reducers
import { combineReducers } from 'redux';

// Log of Operations
let operationsHistory = [];

let results = [];

let operationsThread = {
    // Control Conditionals for Operation
    controlWire: {
        firstOperationDone: false,
    },
    // data for Numbers and operations
    operationsToDo: [],

    operationsDo() {
        // Sum Results
        if (this.controlWire.firstOperationDone) {
            results.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            });
        }

        // Single Operation
        if (this.operationsToDo.length === 4) {
            this.operationsToDo.reduce((accumulator, actualValue, index, array) => {
                if (actualValue === "SUM") {
                    results.push(accumulator + array[index + 1]);
                    this.controlWire.firstOperationDone = true;
                    this.operationsFinish();
                }

            });
        }

    },

    operationsFinish() {
        this.operationsToDo = [];
        results.filter(()=> {return NaN});
    },
}


const numbersThread = (screenNumber = [""], action) => {

    // Creating New Numbers on Screen 
    if (action.type === 'ADD_SCREEN_NUMBER') {
        if (operationsThread.controlWire.firstOperationDone) {
            return screenNumber = results[0];
        }
        return screenNumber += action.payload;
    }

    if (action.type === 'OPERATION_METHOD') {
        operationsThread.operationsToDo.push(parseInt(screenNumber), action.payload);
        operationsThread.operationsDo();
        // reseting operation ( have to fix this shit )


        // reset screen after operation
        return screenNumber = "";
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