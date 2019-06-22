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
    // blockNumber is a String
    // prevent operation with nothing (NaN)
    let intNumber = 0;
    if(typeof(blockNumber) === 'string'){
        intNumber = parseInt(blockNumber);
    }
    else {
        intNumber = 0;
    }

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