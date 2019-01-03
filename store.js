import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-unfetch';
import rootReducer from './reducers/index';

import { actions } from "./actions/todos";
import { initSagas } from './initSagas';
import defaultState from './store/defaultState';

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
        store.dispatch(actions.initialLoad(data));
    });

export default store;