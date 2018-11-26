import { createStore, applyMiddleware, compose } from 'redux';
import * as actions from "./actions";
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
        case actions.INITIAL_LOAD:
            newState = { todos: data.todos };
            break;
        case actions.TODO_EDITED:
            newState = dupState(state);
            newState.todos = newState.todos.map(todo => {
                if(todo.id === data.todo.id) {
                    return data.todo;
                }
               return todo;
            });
            break;
        case actions.TODO_SAVED:
            newState = dupState(state);
            newState.todos.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
}, composeEnhancers(applyMiddleware(sagaMiddleware)));

initSagas(sagaMiddleware);

// Initial data load
fetch('http://localhost:3000/api/todos')
    .then(async function(resp)  {
        let data = await resp.json();
        store.dispatch(actions.initialLoad(data));
    });

export default store;