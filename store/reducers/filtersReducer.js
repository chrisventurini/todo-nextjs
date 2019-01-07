

import { actionTypes } from '../actions/filtering/index';
import defaultState from '../defaultState';


export default (state = defaultState.filters, data) => {
    let newState;
    switch (data.type) {
        case actionTypes.TOGGLE_FILTER_COMPLETED:
            newState = Object.assign({}, state, { completed: !state.completed });
            break;
        default:
            newState = state;
    }

    return newState;
}