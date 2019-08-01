// Reducers
import { combineReducers } from 'redux';


// Log of Operations
let operationsHistory = [];

const blockNumber = (blockNumber = 0, action ) => {
    if (action.type === 'ADD_BLOCK_NUMBER'){

        // Create Log
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
    blockNumber: blockNumber,
});

