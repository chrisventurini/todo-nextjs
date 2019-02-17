import uuid from 'uuid/v4';

import { todosById } from '../../api/todos';

// Test utils
import { todoBuilder } from '../../__testutils__/testDataBuilders';

// Mocked imports
jest.mock('../../api/data/todoRepository');
import mockTodoRepo from '../../api/data/todoRepository';

describe('todosById API', () => {

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('when executing a get', () => {
        let stubReq,
            stubRes,
            stubTodo;

        beforeEach(() => {
            stubReq = {
                params: { id: uuid() }
            };

            stubRes = {
                send: jest.fn()
            };

            stubTodo = todoBuilder();
            mockTodoRepo.getById.mockReturnValue(stubTodo);

            todosById.get(stubReq, stubRes);
        });

        it('should call the repository and get the todo by id', () => {
            expect(mockTodoRepo.getById).toBeCalledWith(stubReq.params.id);
        });

        it('should send back the queried todo on the response', () => {
            expect(stubRes.send).toBeCalledWith(stubTodo);
        });

    });

});