// Reducers
import { combineReducers } from 'redux';

const numberDisplay = (numberDisplay = '', action ) => {
    if (action.type === 'ADD_NUMBER_DISPLAY'){
        return [numberDisplay + action.payload];
    }
    // reseting numberDisplay
    else if(action.type === 'RESET_NUMBER_DISPLAY'){
        // set default
        return numberDisplay = '';
    }
    return numberDisplay;
}

const blockNumber = (blockNumber = 0, action ) => {
    if (action.type === 'ADD_BLOCK_NUMBER'){

        // Creating Expression 
        if(action.payload.operationMethod === 'SUM'){
            return  blockNumber + action.payload.intNumber
        }

    }

    // Reseting Block Number 
    else if(action.type === 'RESET_BLOCK_NUMBER'){
        return blockNumber = [];
    }
    return blockNumber;
}

export default combineReducers({
    numberDisplay: numberDisplay,
    blockNumber: blockNumber,
});

