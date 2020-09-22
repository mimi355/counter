import {INCREMENT,DECREMENT,RESET, TOGGLE_VISIBILITY} from './actionType';


 export const initialState={
    count : 0,
    isVisible:false
};


export const reducer = (state=initialState,action) => {
    switch(action.type){
case INCREMENT:
    return {...state, count:state.count+1};
    case DECREMENT:
        if(state.count>0){
        return{...state, count:state.count-1}};
    
case RESET:
   
    return{...state, count:0};

case TOGGLE_VISIBILITY:
    return{...state,isVisible:!state.isVisible};

default:
    return state
    }}