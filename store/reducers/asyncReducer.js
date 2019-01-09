import consts from '../../consts';
import defaultState from '../defaultState';


export default (state = defaultState.asyncCallsInProgress, data) => {
    let actionType = data.type;

    if(actionType.startsWith(consts.ASYNC_STARTED)) {
        return state++;
    } else if (actionType.startsWith(consts.ASYNC_COMPLETED)) {
        return state--;
    }

    return state;
}