import { todoActionTypes, todoActions } from "../actions";
import * as effects from 'redux-saga/effects'

export function* todoSubmittedSaga() {
    yield effects.takeEvery(todoActionTypes.TODO_SUBMITTED, function* ({todo}) {
         let response = yield fetch('http://localhost:3000/api/todos', {
           method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
         });

         let savedTodo = yield response.json();
         yield effects.put(todoActions.todoSaved(savedTodo));
    });
}
