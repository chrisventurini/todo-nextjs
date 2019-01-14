import {actions, actionTypes} from "../actions/todos/index";
import * as effects from 'redux-saga/effects'

// TODO: Add error handling
export default function* todoUpdateSaga() {
    yield effects.takeEvery(actionTypes.TODO_UPDATE, function* ({todo}) {
        let response = yield fetch('http://localhost:3000/api/todos', {
           method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
        });

        if(response.ok) {
            yield effects.put(actions.todoUpdateSuccessful(todo));
        }
    });
}
