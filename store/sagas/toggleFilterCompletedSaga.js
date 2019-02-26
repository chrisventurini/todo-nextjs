import { actionTypes } from "../actions/filtering";
import * as effects from 'redux-saga/effects'

export function* _addFilterParam() {
    if(!process.browser) {
        return;
    }

    let curUrl = window.location.href;

    let completed = yield effects.select(store => store.filters.completed);

    let url = `${curUrl}?filterCompleted=${completed}`;

    window.history.pushState({path: url}, '', url);
}

export default function* toggleFilterCompletedSaga() {
    yield effects.takeEvery(actionTypes.SET_FILTERED_COMPLETED, _addFilterParam);
}
