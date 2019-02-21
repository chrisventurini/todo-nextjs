import { shallow } from "enzyme/build";

import IndexPage from '../../pages/index';

// Mock Dependencies
jest.mock('../../store');
jest.mock('../../store/sagas');
jest.mock('../../store/actions/todos');
jest.mock('../../services/todoService');

import { actions } from '../../store/actions/todos';
import mockStore from '../../store';
import mockTodoService from '../../services/todoService';


describe('<Index> page', () => {
    let mockActions = actions;

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
                expect(mockActions.todoLoad).not.toHaveBeenCalled();
            });

        });

        describe('when not in the browser', () => {
            let stubAction,
                stubTodos;

            beforeEach(async () => {
                stubAction = { type: 'stub' };
                stubTodos = [{}, {}];
                stubContext = {
                    query: { completed: true }
                };
                process.browser = false;

                mockTodoService.fetchAll.mockReturnValue(stubTodos);
                mockActions.todoLoad.mockReturnValue(stubAction);

                results = await IndexPage.getInitialProps(stubContext);
            });

            it('should fetch todos with the complete param', () => {
                expect(mockTodoService.fetchAll).toHaveBeenCalledWith({ completed: true });
            });

            it('should return an empty object', () => {
                expect(results).toMatchObject({});
            });

            it('should dispatch a todoLoad event', () => {
                expect(mockStore.dispatch).toHaveBeenCalledWith(stubAction);
                expect(mockActions.todoLoad).toHaveBeenCalledWith(stubTodos);
            });

        });

    });

});