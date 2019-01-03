import { bindActionCreators } from 'redux';

import { INITIAL_LOAD, initialLoad } from './initialLoad'
import { TODO_EDITED, todoEdited } from './todoEdited'
import { TODO_SAVED, todoSaved } from './todoSaved'
import { TODO_SUBMITTED, todoSubmitted } from './todoSubmitted'

export const actions = {
  initialLoad,
  todoEdited,
  todoSaved,
  todoSubmitted
};

export const actionTypes = {
  INITIAL_LOAD,
  TODO_EDITED,
  TODO_SAVED,
  TODO_SUBMITTED
};

export const mapDispatchToTodoActions = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
};


