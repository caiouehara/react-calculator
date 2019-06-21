// Action Creators
export const addLiveNumber = number =>{
    return{
        type: 'ADD_LIVE_NUMBER',
        payload: number
    };
}