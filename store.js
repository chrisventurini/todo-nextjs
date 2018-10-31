import { createStore, applyMiddleware, compose } from 'redux';
import {TO_DO_SUBMITTED} from "./actions";

const dupState = state => {
    let newState = {...state};
    newState.toDos = newState.toDos.slice(0);
    return newState;
};

let defaulState = {
    toDos: []
};

export default createStore((state = defaulState, data) => {
    let newState;

    switch (data.type) {
        case TO_DO_SUBMITTED:
            newState = dupState(state);
            newState.toDos.push(data.toDo);
            break;
        default:
            newState = state;
    }

    return newState;
})