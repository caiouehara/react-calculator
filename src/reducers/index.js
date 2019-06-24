// Reducers
import { combineReducers } from 'redux';


// Log of Operations
let operationsHistory = [];

const numberDisplay = (numberDisplay = '', action ) => {
    if (action.type === 'ADD_NUMBER_DISPLAY'){
        return numberDisplay + action.payload;
    }
    // reseting numberDisplay
    if(action.type === 'RESET_NUMBER_DISPLAY'){
        return numberDisplay = '';
    }
    if(action.type === 'DISPLAY_HISTORY'){
        console.log(operationsHistory)
    }
    return numberDisplay;
}

const blockNumber = (blockNumber = 0, action ) => {
    if (action.type === 'ADD_BLOCK_NUMBER'){

        operationsHistory.push(action.payload);

        // Creating Expression 
        if(action.payload.operationMethod === 'SUM'){
            return  blockNumber + action.payload.intNumber
        }

    }

    // Reseting Block Number 
    else if(action.type === 'RESET_BLOCK_NUMBER'){
        return blockNumber = 0;
    }
    return blockNumber;
}

export default combineReducers({
    numberDisplay: numberDisplay,
    blockNumber: blockNumber,
});

