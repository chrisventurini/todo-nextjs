import { createStore, applyMiddleware, compose } from 'redux';
import {INITIAL_LOAD, initialLoad, TODO_SUBMITTED} from "./actions";
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-unfetch';
import { initSagas } from './initSagas';

const dupState = state => {
    let newState = {...state};
    newState.todos = newState.todos.slice(0);
    return newState;
};

let sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

let defaultState = {
    todos: []
};

let store = createStore((state = defaultState, data) => {
    let newState;

    switch (data.type) {
        case INITIAL_LOAD:
            newState = { todos: data.todos };
            break;
        case TODO_SUBMITTED:
            newState = dupState(state);
            newState.todos.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
}, composeEnhancers(applyMiddleware(sagaMiddleware)));

initSagas(sagaMiddleware);

fetch('http://localhost:3000/api/todos')
    .then(async function(resp)  {
        let data = await resp.json();
        store.dispatch(initialLoad(data));
    });

export default store;