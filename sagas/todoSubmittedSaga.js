import {TODO_SUBMITTED} from "../actions";
import * as effects from 'redux-saga/effects'

export function* todoSubmittedSaga() {
    yield effects.takeEvery(TODO_SUBMITTED, function* ({todo}) {
        yield fetch('http://localhost:3000/api/todos', {
           method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
        });
    })

}
