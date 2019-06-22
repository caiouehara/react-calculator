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

const blockNumber = (blockNumber = [], action ) => {
    if (action.type === 'ADD_BLOCK_NUMBER'){
        return [...blockNumber, [action.payload.blockNumber, action.payload.operationMethod] ];
    }
    else if(action.type === 'RESET_BLOCK_NUMBER'){
        return blockNumber = [];
    }
    return blockNumber;
}

export default combineReducers({
    numberDisplay: numberDisplay,
    blockNumber: blockNumber,
});

