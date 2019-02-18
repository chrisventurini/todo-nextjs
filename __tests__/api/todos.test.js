import uuid from 'uuid/v4';

import { todos, todosById } from '../../api/todos';

// Test utils
import { todoBuilder } from '../../__testutils__/testDataBuilders';

// Mocked imports
jest.mock('../../api/data/todoRepository');
jest.mock('../../services/todoSorter');
import mockTodoRepo from '../../api/data/todoRepository';
import mockTodoSorter from '../../services/todoSorter';

describe('todos API', () => {
    let mockReq,
        mockRes;

    beforeEach(() => {
        mockReq = {
            query: {},
            params: {}
        };

        mockRes = {
            send: jest.fn()
        };
    });

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('bulk', () => {

        describe('when executing a get', () => {
            let stubOrderedTodos,
                stubTodos;

            beforeEach(() => {
                stubOrderedTodos = [todoBuilder(), todoBuilder()];

                stubTodos = [todoBuilder(), todoBuilder()];

                mockTodoRepo.getAll.mockResolvedValue({
                    collection: stubTodos,
                    count: stubTodos.length
                });

                mockTodoSorter.mockReturnValue(stubOrderedTodos);
            });

            describe('with no specified params', () => {

                beforeEach(() => {
                    mockReq.query = {
                        count: '',
                        start: undefined
                    };
                    return todos.get(mockReq, mockRes);
                });

                it('should return the ordered todos and count on the response', () => {
                    expect(mockRes.send).toBeCalledWith({
                        collection: stubOrderedTodos,
                        count: stubOrderedTodos.length
                    });
                });

                it('should call the todoSorter with the retrieved todos from the repository', () => {
                    expect(mockTodoSorter).toHaveBeenCalledWith(stubTodos);
                });

                it('should call getAll on the todo repository with the default pagination params', () => {
                    expect(mockTodoRepo.getAll).toHaveBeenCalledWith(0, 25);
                });

            });

            describe('with specified params', () => {

                beforeEach(() => {
                    mockReq.query = {
                        count: '50',
                        start: '5'
                    };

                    return todos.get(mockReq, mockRes);
                });

                it('should return the ordered todos and count on the response', () => {
                    expect(mockRes.send).toBeCalledWith({
                        collection: stubOrderedTodos,
                        count: stubOrderedTodos.length
                    });
                });

                it('should call the todoSorter with the retrieved todos from the repository', () => {
                    expect(mockTodoSorter).toHaveBeenCalledWith(stubTodos);
                });

                it('should call getAll on the todo repository with the default pagination params', () => {
                    expect(mockTodoRepo.getAll).toHaveBeenCalledWith(5, 50);
                });

            });

        });

    });

    describe('ById', () => {

        describe('when executing a get', () => {
            let stubTodo;

            beforeEach(() => {
                mockReq.params.id = uuid();

                stubTodo = todoBuilder();
                mockTodoRepo.getById.mockResolvedValue(stubTodo);

                return todosById.get(mockReq, mockRes);
            });

            it('should call the repository and get the todo by id', () => {
                expect(mockTodoRepo.getById).toBeCalledWith(mockReq.params.id);
            });

            it('should send back the queried todo on the response', () => {
                expect(mockRes.send).toBeCalledWith(stubTodo);
            });

        });

    });

});

