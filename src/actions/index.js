// Action Creators

// Log
export const displayHistory = () =>{
    return{
        type: 'DISPLAY_HISTORY',
    };
}

// Block Number Control
export const addScreenNumber = (blockNumber) =>{
    return{
        type: 'ADD_SCREEN_NUMBER',
        payload: blockNumber
    };
}

export const resetNumbersThread = () =>{
    return{
        type: 'RESET_NUMBERS_THREAD',
    };
}

// Operation Control
export const operation = (operation) =>{
    return{
        type: 'OPERATION_METHOD',
        payload: operation
    };
}