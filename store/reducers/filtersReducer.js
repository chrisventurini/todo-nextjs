import { actionTypes } from '../actions/filtering/index';
import defaultState from '../defaultState';


export default (state = defaultState.filters, data) => {
    let newState;
    switch (data.type) {
        case actionTypes.SET_FILTERED_COMPLETED:
            newState = Object.assign({}, state, { completed: data.completed });
            break;
        default:
            newState = state;
    }

    return newState;
}