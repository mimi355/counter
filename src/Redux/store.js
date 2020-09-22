import {createStore,applyMiddleware } from 'redux';
import {reducer,initialState}  from './reducer';
import logger from 'redux-logger';



const mylogger =(store) => (next) => (action) => {

    console.log("Middleware Triggered:", action);
    next(action);
  }
  
  export const store = createStore(reducer,initialState,applyMiddleware(mylogger,logger));
  store.subscribe(()=>{
    //console.log("store changed:" , store.getState())
  })