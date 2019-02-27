import queryString from "query-string";
import { actionTypes } from "../actions/filtering";
import * as effects from 'redux-saga/effects'

export function* _addFilterParam() {
    if(!process.browser) {
        return;
    }

    let loc = window.location,
        queryParams = queryString.parse(loc.search),
        completed = yield effects.select(store => store.filters.completed);

    for(let param in queryParams){
        if (param && param.toLowerCase() === 'filtercompleted') {
            delete queryParams[param];
        }
    }

    let url = `${loc.origin}/?filterCompleted=${completed}&${queryString.stringify(queryParams)}`;

    window.history.pushState({path: url}, '', url);
}

export default function* toggleFilterCompletedSaga() {
    yield effects.takeEvery(actionTypes.SET_FILTERED_COMPLETED, _addFilterParam);
}
