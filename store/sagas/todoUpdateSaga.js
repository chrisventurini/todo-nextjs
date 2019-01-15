import {actions, actionTypes} from "../actions/todos/index";
import * as effects from 'redux-saga/effects';

const HANDLED_ACTIONS = [
   actionTypes.TODO_UPDATE,
   actionTypes.TODO_COMPLETE
];

// TODO: Add error handling
export default function* todoUpdateSaga() {
    yield effects.takeEvery(HANDLED_ACTIONS, function* ({todo, type}) {
        let response = yield fetch('http://localhost:3000/api/todos', {
           method: 'PATCH',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
           body:JSON.stringify(todo)
        });

        if(response.ok) {
            if(type === actionTypes.TODO_UPDATE) {
                yield effects.put(actions.todoUpdateSuccessful(todo));
            } else {
                yield effects.put(actions.todoCompleteSuccessful(todo));
            }
        }
    });
}
