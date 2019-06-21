// Reducers
import { combineReducers } from 'redux';

const numberDisplay = (number = '', action ) => {
    if (action.type === 'ADD_LIVE_NUMBER'){
        return [number + action.payload];
    }
    return number;
}

const liveNumber = (number = '', action ) => {
    if (action.type === 'ADD_LIVE_NUMBER'){
        return [...number, action.payload];
    }
    return number;
}

export default combineReducers({
    liveNumber: liveNumber,
    numberDisplay: numberDisplay,
});

