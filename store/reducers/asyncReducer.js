import consts from '../../consts';
import defaultState from '../defaultState';

const _buildState = (state, increment) => {
  let numVal = (state.num + increment);

  return {
      num: numVal,
      inProgress: (numVal > 0)
  };
};

export default (state = defaultState.asyncCalls, data) => {
    let actionType = data.type;
    if(actionType.startsWith(consts.ASYNC_STARTED)) {
        return _buildState(state, 1);
    } else if (actionType.startsWith(consts.ASYNC_COMPLETED)) {
        return _buildState(state, -1);
    }

    return state;
}