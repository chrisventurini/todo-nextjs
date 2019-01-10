import { actions, actionTypes } from "../actions/todos";
import * as effects from 'redux-saga/effects'

// TODO: Add error handling
export default function* todoSubmittedSaga() {
    yield effects.takeEvery(actionTypes.TODO_SAVE, function* ({todo}) {
         let response = yield fetch('http://localhost:3000/api/todos', {
           method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
         });

         let savedTodo = yield response.json();
         yield effects.put(actions.todoSaveSuccessful(savedTodo));
    });
}
