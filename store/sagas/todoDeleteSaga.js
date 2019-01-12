import {actions, actionTypes} from "../actions/todos/index";
import * as effects from 'redux-saga/effects'

// TODO: Add error handling
export default function* todoUpdateSaga() {
    yield effects.takeEvery(actionTypes.TODO_DELETE, function* ({todo}) {
        let response = yield fetch(`http://localhost:3000/api/todos/${todo.id}`, {
           method: 'DELETE',
        });

        if(response.ok)
            yield effects.put(actions.todoDeleteSuccessful(todo));
    });
}
