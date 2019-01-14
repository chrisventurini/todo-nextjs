import Router from 'next/router';
import * as effects from 'redux-saga/effects';

import { actionTypes } from "../actions/todos";

const takeActions = [
    actionTypes.TODO_DELETE_SUCCESSFUL,
    actionTypes.TODO_UPDATE_SUCCESSFUL
];

export default function* routeHomeSaga() {

    yield effects.takeEvery(takeActions, () =>{
        Router.push('/');
    });

}
