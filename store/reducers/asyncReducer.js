import consts from '../../consts';
import defaultState from '../defaultState';

export default (state = defaultState.asyncCallsInProgress, data) => {
    let actionType = data.type;
    if(actionType.startsWith(consts.ASYNC_STARTED)) {
        return state + 1;
    } else if (actionType.startsWith(consts.ASYNC_COMPLETED)) {
        return state - 1;
    }

    return state;
}