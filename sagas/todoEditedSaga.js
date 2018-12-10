import { TODO_EDITED } from "../actions";
import * as effects from 'redux-saga/effects'

export function* todoEditedSaga() {
    yield effects.takeEvery(TODO_EDITED, function* ({todo}) {
        yield fetch('http://localhost:3000/api/todos', {
           method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
        });

    });
}
