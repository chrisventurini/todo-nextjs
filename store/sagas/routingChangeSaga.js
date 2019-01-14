import Router from 'next/router';
import { eventChannel } from 'redux-saga';
import * as effects from 'redux-saga/effects';

import { actions } from "../actions/routing";

export default function* routingChangeSaga() {
    let channel = new eventChannel(emit => {
        Router.events.on('routeChangeStart', () => {
            emit(actions.routeChangeStarted)
        });

        Router.events.on('routeChangeComplete', () => {
            emit(actions.routeChangeCompleted)
        });

        // TODO: Add proper error handling
        Router.events.on('routeChangeError', () => {
            emit(actions.routeChangeCompleted)
        });

        return () => {};
    });

    while(true) {
        let routerAction = yield effects.take(channel);
        yield effects.put(routerAction());
    }
}
