import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-unfetch';
import rootReducer from './reducers/index';

import { todoActions } from "./actions";
import { initSagas } from './initSagas';


let sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

let store = createStore(rootReducer, {todos: []}, composeEnhancers(applyMiddleware(sagaMiddleware)));

initSagas(sagaMiddleware);

// Initial data load
fetch('http://localhost:3000/api/todos')
    .then(async function(resp)  {
        let data = await resp.json();
        store.dispatch(todoActions.initialLoad(data));
    });

export default store;