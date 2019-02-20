import { actionTypes } from "../actions/filtering/";
import * as effects from 'redux-saga/effects'

export function* _addFilterParam() {
    let curUrl = window.location.href;

    let completed = yield effects.select(store => store.filters.completed);

    window.location.assign(`${curUrl}?complete=${completed}`);
}

export default function* toggleFilterCompletedSaga() {
    yield effects.takeEvery(actionTypes.TOGGLE_FILTER_COMPLETED, _addFilterParam);
}
