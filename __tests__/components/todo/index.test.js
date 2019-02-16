import { TODO_COMPLETE, todoComplete } from '../../../store/actions/todos/todoComplete';
import { TODO_COMPLETE_SUCCESSFUL, todoCompleteSuccessful } from '../../../store/actions/todos/todoCompleteSuccessful';
import { TODO_LOAD, todoLoad } from '../../../store/actions/todos/todoLoad';
import { TODO_DELETE, todoDelete } from '../../../store/actions/todos/todoDelete';
import { TODO_DELETE_SUCCESSFUL, todoDeleteSuccessful } from '../../../store/actions/todos/todoDeleteSuccessful';
import { TODO_FETCH_PAGE, todoFetchPage } from "../../../store/actions/todos/todoFetchPage";
import { TODO_SAVE, todoSave } from '../../../store/actions/todos/todoSave';
import { TODO_SAVE_SUCCESSFUL, todoSaveSuccessful } from '../../../store/actions/todos/todoSaveSuccessful';
import { TODO_UPDATE, todoUpdate } from '../../../store/actions/todos/todoUpdate';
import { TODO_UPDATE_SUCCESSFUL, todoUpdateSuccessful } from '../../../store/actions/todos/todoUpdateSuccessful';

import { actions, actionTypes, mapDispatchToTodoActions } from "../../../store/actions/todos";

// Mock imports
jest.mock('redux');
import { bindActionCreators }from 'redux';

describe('actions', () => {

    it('should have the collection of all the todo action functions', () => {
        let expectedActions = {
            todoComplete,
            todoCompleteSuccessful,
            todoLoad,
            todoDelete,
            todoDeleteSuccessful,
            todoFetchPage,
            todoSave,
            todoSaveSuccessful,
            todoUpdate,
            todoUpdateSuccessful
        };

        expect(actions).toEqual(expectedActions);
    });

});

describe('actionTypes', () => {

    it('should have the collection of all the todo action constants', () => {
        let expectedActionTypes = {
            TODO_COMPLETE,
            TODO_COMPLETE_SUCCESSFUL,
            TODO_DELETE,
            TODO_DELETE_SUCCESSFUL,
            TODO_LOAD,
            TODO_FETCH_PAGE,
            TODO_SAVE,
            TODO_SAVE_SUCCESSFUL,
            TODO_UPDATE,
            TODO_UPDATE_SUCCESSFUL,
        };

        expect(actionTypes).toEqual(expectedActionTypes);
    });

});

describe('mapDispatchToTodoActions', () => {

    describe('when executing', () => {
        let results,
            stubActions,
            stubDispatch;

        beforeEach(() => {
            stubDispatch = {};
            stubActions = { stubAction: jest.fn() };

            bindActionCreators.mockImplementation(() => stubActions);

            results = mapDispatchToTodoActions(stubDispatch);
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('should return the expected actions property', () => {
            expect(results).toHaveProperty('actions', stubActions);
        });

        it('should call the redux bindActionCreators with the actions object', () => {
            expect(bindActionCreators).toHaveBeenCalledWith(actions, stubDispatch);
        });

    });

});
