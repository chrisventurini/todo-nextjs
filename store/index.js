import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-unfetch';
import rootReducer from './reducers';

import { actions } from "./actions/todos";
import initSagas from './sagas/index';
import defaultState from './defaultState';

let sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

let store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(sagaMiddleware)));

initSagas(sagaMiddleware);

// Initial data load
fetch('http://localhost:3000/api/todos')
    .then(async function(resp)  {
        let data = await resp.json();
        store.dispatch(actions.todoInitialLoad(data));
    });

export default store;