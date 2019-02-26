import { shallow } from "enzyme/build";

import IndexPage from '../../pages/index';

// Mock Dependencies
jest.mock('../../store');
jest.mock('../../store/sagas');
jest.mock('../../store/actions/filtering');
jest.mock('../../store/actions/todos');
jest.mock('../../services/todoService');

import { actions as mockFilteringActions } from '../../store/actions/filtering';
import { actions as mockTodoActions } from '../../store/actions/todos';
import mockStore from '../../store';
import mockTodoService from '../../services/todoService';


describe('<Index> page', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('when getting the initial props', () => {
        let stubContext,
            results;

        describe('when in the browser', () => {

            beforeEach(async () => {
                stubContext = {};
                process.browser = true;
                results = await IndexPage.getInitialProps(stubContext);
            });

            it('should not fetch todos', () => {
                expect(mockTodoService.fetchAll).not.toHaveBeenCalled();
            });

            it('should return an empty object', () => {
                expect(results).toMatchObject({});
            });

            it('should not dispatch a todoLoad event', () => {
                expect(mockStore.dispatch).not.toHaveBeenCalled();
                expect(mockTodoActions.todoLoad).not.toHaveBeenCalled();
            });

        });

        describe('when not in the browser', () => {
            let stubFilterAction,
                stubTodoAction,
                stubTodos;

            beforeEach(async () => {
                stubFilterAction = { type: 'filter' };
                stubTodoAction = { type: 'todo' };
                stubTodos = [{}, {}];
                stubContext = {
                    query: { filterCompleted: 'true' }
                };
                process.browser = false;

                mockFilteringActions.setFilterCompleted.mockReturnValue(stubFilterAction);

                mockTodoService.fetchAll.mockReturnValue(stubTodos);
                mockTodoActions.todoLoad.mockReturnValue(stubTodoAction);

                results = await IndexPage.getInitialProps(stubContext);
            });

            it('should fetch todos with the complete param', () => {
                expect(mockTodoService.fetchAll).toHaveBeenCalledWith({ completed: false });
            });

            it('should dispatch the completed filter', () => {
                expect(mockStore.dispatch).toHaveBeenCalledWith(stubFilterAction);
                expect(mockFilteringActions.setFilterCompleted).toHaveBeenCalledWith(true);
            });

            it('should return an empty object', () => {
                expect(results).toMatchObject({});
            });

            it('should dispatch a todoLoad event', () => {
                expect(mockStore.dispatch).toHaveBeenCalledWith(stubTodoAction);
                expect(mockTodoActions.todoLoad).toHaveBeenCalledWith(stubTodos);
            });


        });

    });

});