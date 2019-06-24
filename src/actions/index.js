// Action Creators

// Display Control
export const addNumberDisplay = number =>{
    return{
        type: 'ADD_NUMBER_DISPLAY',
        payload: number
    };
}

export const resetNumberDisplay = () =>{
    return{
        type: 'RESET_NUMBER_DISPLAY',
    };
}

// Log
export const displayHistory = () =>{
    return{
        type: 'DISPLAY_HISTORY',
    };
}

// Block Number Control
export const addBlockNumber = (blockNumber, operationMethod) =>{
    let intNumber = 0;
    // prevent operation with nothing (NaN)
    isNaN(blockNumber) ? intNumber = 0 : intNumber = blockNumber;
    
    return{
        type: 'ADD_BLOCK_NUMBER',
        payload: { intNumber , operationMethod }
    };
}

export const resetBlockNumber = () =>{
    return{
        type: 'RESET_BLOCK_NUMBER',
    };
}