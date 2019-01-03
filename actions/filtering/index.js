import { bindActionCreators } from 'redux';

import { TOGGLE_FILTER_COMPLETED, toggleFilterCompleted } from './toggleFilterCompleted'

export const actions = {
    toggleFilterCompleted
};

export const actionTypes = {
    TOGGLE_FILTER_COMPLETED
};

export const mapDispatchToFilterActions = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
};


