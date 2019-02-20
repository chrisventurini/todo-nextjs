import {actions, actionTypes} from "../actions/todos/index";
import * as effects from 'redux-saga/effects'

// TODO: Add error handling
export function* _deleteTodo({todo}) {
    let response = yield fetch(`http://localhost:3000/api/todos/${todo.id}`, {
       method: 'DELETE',
    });

    if(response.ok) {
        yield effects.put(actions.todoDeleteSuccessful(todo));
    }
}

export default function* todoUpdateSaga() {
    yield effects.takeEvery(actionTypes.TODO_DELETE, _deleteTodo);
}
