import { actionTypes, actions } from "../actions/todos/index";
import * as effects from 'redux-saga/effects'

export default function* todoSubmittedSaga() {
    yield effects.takeEvery(actionTypes.TODO_SUBMITTED, function* ({todo}) {
         let response = yield fetch('http://localhost:3000/api/todos', {
           method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
         });

         let savedTodo = yield response.json();
         yield effects.put(actions.todoSaved(savedTodo));
    });
}
