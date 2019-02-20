import { actions, actionTypes} from "../actions/todos/index";
import * as effects from 'redux-saga/effects'

export function* _fetchPage() {

}

// TODO: Add error handling
export default function* todoFetchPageSaga() {
    yield effects.takeEvery(actionTypes.TODO_FETCH_PAGE, _fetchPage);
}
