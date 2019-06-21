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

export const addBlockNumber = blockNumber =>{
    return{
        type: 'ADD_BLOCK_NUMBER',
        payload: blockNumber
    };
}