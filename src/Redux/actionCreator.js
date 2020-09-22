import {INCREMENT,DECREMENT,RESET,TOGGLE_VISIBILITY} from './actionType';

export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}


export const reset=()=>{
    return{
        type:RESET
    }
}



export const toggleVisibility=()=>{
    return{
        type:TOGGLE_VISIBILITY
    }
}