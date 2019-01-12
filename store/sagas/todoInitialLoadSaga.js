import { actions } from "../actions/todos";
import fetch from 'isomorphic-unfetch';
import * as effects from 'redux-saga/effects';

// TODO: Add error handling
export default function* todoInitialLoadSaga() {
    // Initial data load
    let response = yield fetch('http://localhost:3000/api/todos'),

        todos = yield response.json();

    yield effects.put(actions.todoInitialLoad(todos));
}
