// Reducers
import { combineReducers } from 'redux';


// Log of Operations
let operationsHistory = [];

const blockNumber = (blockNumber = [], action ) => {
    if (action.type === 'ADD_BLOCK_NUMBER'){
            return blockNumber += action.payload;
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

