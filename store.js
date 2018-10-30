import { createStore, applyMiddleware, compose } from 'redux';


let defaulState = [];

export default createStore((state = defaulState, data) => {

    console.log(data);

    return state;
})