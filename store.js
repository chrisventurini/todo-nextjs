import { createStore, applyMiddleware, compose } from 'redux';
import {TODO_SUBMITTED} from "./actions";

const dupState = state => {
    let newState = {...state};
    newState.todos = newState.todos.slice(0);
    return newState;
};

let defaulState = {
    todos: []
};

export default createStore((state = defaulState, data) => {
    let newState;

    switch (data.type) {
        case TODO_SUBMITTED:
            newState = dupState(state);
            newState.todos.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
})