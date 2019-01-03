import { bindActionCreators } from 'redux';

import { INITIAL_LOAD, initialLoad } from './initialLoad'
import { TODO_EDITED, todoEdited } from './todoEdited'
import { TODO_SAVED, todoSaved } from './todoSaved'
import { TODO_SUBMITTED, todoSubmitted } from './todoSubmitted'

const todoActions = {
  initialLoad,
  todoEdited,
  todoSaved,
  todoSubmitted
};

const todoActionTypes = {
  INITIAL_LOAD,
  TODO_EDITED,
  TODO_SAVED,
  TODO_SUBMITTED
};

const mapDispatchToTodoActions = dispatch => {
    return { actions: bindActionCreators(todoActions, dispatch) };
};

export {
    todoActions,
    todoActionTypes,
    mapDispatchToTodoActions
};

