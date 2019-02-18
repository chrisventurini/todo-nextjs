import todoRepository from '../../../api/data/todoRepository';

// Test utils
import { todoBuilder } from '../../../__testutils__/testDataBuilders';

// Mock dependencies
jest.mock('../../../api/data/models');
import mockDb from '../../../api/data/models';

describe('todoRepository', () => {

    beforeEach(() => {
       mockDb.Todo = {};
    });

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('when getting all todos', () => {
        let stubTodos,
            results;

        beforeEach(async () => {
            stubTodos = [
                todoBuilder(),
                todoBuilder()
            ];

            mockDb.Todo.findAndCountAll = jest.fn();
            mockDb.Todo.findAndCountAll.mockReturnValue({
                rows: stubTodos,
                count: stubTodos.length
            });

            results = await todoRepository.getAll(0, 5);
        });

        it('should return the todos retrieved from the database', () => {
            expect(results).toEqual({
                collection: stubTodos,
                count: stubTodos.length
            });
        });

        it('should call query the database with a limit and offset', () => {
            expect(mockDb.Todo.findAndCountAll).toBeCalledWith({ limit: 5, offset: 0});
        });

    });

});