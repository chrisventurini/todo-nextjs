import { bindActionCreators } from 'redux';

import { SET_FILTERED_COMPLETED, setFilterCompleted } from './setFilterCompleted'

export const actions = {
    setFilterCompleted
};

export const actionTypes = {
    SET_FILTERED_COMPLETED
};

export const mapDispatchToFilterActions = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
};


