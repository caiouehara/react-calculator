// Action Creators

export const addNumber = (number) =>{
    return {
        type: 'ADD_NUMBER',
        payload: number
    };
}

export const addOperation = (operation) =>{
    return {
        type: 'ADD_OPERATION',
        payload: operation
    };
}