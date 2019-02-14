import { bindActionCreators } from 'redux';

import { TODO_COMPLETE, todoComplete } from './todoComplete';
import { TODO_COMPLETE_SUCCESSFUL, todoCompleteSuccessful } from './todoCompleteSuccessful';
import { TODO_LOAD, todoLoad } from './todoLoad';
import { TODO_DELETE, todoDelete } from './todoDelete';
import { TODO_DELETE_SUCCESSFUL, todoDeleteSuccessful } from './todoDeleteSuccessful';
import { TODO_FETCH_PAGE, todoFetchPage } from './todoFetchPage';
import { TODO_SAVE, todoSave } from './todoSave';
import { TODO_SAVE_SUCCESSFUL, todoSaveSuccessful } from './todoSaveSuccessful';
import { TODO_UPDATE, todoUpdate } from './todoUpdate';
import { TODO_UPDATE_SUCCESSFUL, todoUpdateSuccessful } from './todoUpdateSuccessful';

export const actions = {
    todoComplete,
    todoCompleteSuccessful,
    todoDelete,
    todoDeleteSuccessful,
    todoFetchPage,
    todoLoad,
    todoUpdate,
    todoSave,
    todoSaveSuccessful,
    todoUpdateSuccessful
};

export const actionTypes = {
    TODO_COMPLETE,
    TODO_COMPLETE_SUCCESSFUL,
    TODO_DELETE,
    TODO_DELETE_SUCCESSFUL,
    TODO_FETCH_PAGE,
    TODO_LOAD,
    TODO_SAVE,
    TODO_SAVE_SUCCESSFUL,
    TODO_UPDATE,
    TODO_UPDATE_SUCCESSFUL,
};

export const mapDispatchToTodoActions = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
};


