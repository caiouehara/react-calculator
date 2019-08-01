// Action Creators

// Log
export const displayHistory = () =>{
    return{
        type: 'DISPLAY_HISTORY',
    };
}

// Block Number Control
export const addBlockNumber = (blockNumber) =>{
    return{
        type: 'ADD_BLOCK_NUMBER',
        payload: blockNumber
    };
}

export const resetBlockNumber = () =>{
    return{
        type: 'RESET_BLOCK_NUMBER',
    };
}