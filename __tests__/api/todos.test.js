import uuid from 'uuid/v4';

import { todos, todosById } from '../../api/todos';

// Test utils
import { todoBuilder } from '../../__testutils__/testDataBuilders';

// Mocked imports
jest.mock('../../api/data/todoRepository');
import mockTodoRepo from '../../api/data/todoRepository';

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
            let stubTodos;

            beforeEach(() => {
                stubTodos = [todoBuilder(), todoBuilder()];

                mockTodoRepo.getAll.mockResolvedValue({
                    collection: stubTodos,
                    count: stubTodos.length
                });
            });

            describe('with no specified params', () => {

                beforeEach(() => {
                    mockReq.query = {
                        count: '',
                    };
                    return todos.get(mockReq, mockRes);
                });

                it('should return the ordered todos and count on the response', () => {
                    expect(mockRes.send).toBeCalledWith({
                        collection: stubTodos,
                        count: stubTodos.length
                    });
                });

                it('should call getAll on the todo repository with the default pagination params and completed false', () => {
                    expect(mockTodoRepo.getAll).toHaveBeenCalledWith(0, 25, false);
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

                it('should return the todos and count on the response', () => {
                    expect(mockRes.send).toBeCalledWith({
                        collection: stubTodos,
                        count: stubTodos.length
                    });
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

