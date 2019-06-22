// Action Creators
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

export const addBlockNumber = (blockNumber, operationMethod) =>{
    return{
        type: 'ADD_BLOCK_NUMBER',
        payload: { blockNumber , operationMethod }
    };
}

export const resetBlockNumber = () =>{
    return{
        type: 'RESET_BLOCK_NUMBER',
    };
}