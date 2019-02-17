import { actionTypes } from "../../../store/actions/todos";
import { todoBuilder } from '../../../__testutils__/testDataBuilders';
import todoReducer from '../../../store/reducers/todoReducer';

describe('todoReducer', () => {
    let stubData,
        stubState,
        stateTodos,
        results;

    beforeEach(() => {
       stateTodos = [
           todoBuilder(),
           todoBuilder()
       ];

       stubData = {};
       stubState = {
           collection: stateTodos,
           count: stateTodos.length
       };
    });

    describe('when executing', () => {

        describe('and the action is unknown', () => {

            beforeEach(() => {
                stubData.type = 'UNKNOWN';

                stubData.collection = [ todoBuilder() ];
                stubData.count = 5;

                results = todoReducer(stubState, stubData);
            });

            it('should return the original state', () =>{
                expect(results).toEqual(stubState);

                delete stubData.type;
                expect(results).not.toEqual(stubData);
            });

        });

        describe('and the action is TODO_LOAD', () => {

            beforeEach(() => {
                stubData.type = actionTypes.TODO_LOAD;

                stubData.collection = [ todoBuilder(), todoBuilder() ];
                stubData.count = 2;

                results = todoReducer(stubState, stubData)
            });

            it('should return the passed data as the state', () =>{
                let expectedResults = stubData;

                delete expectedResults.type;

                expect(results).toEqual(stubData);
            });

        });

        describe('and the action is TODO_DELETE', () => {
           let deletedTodo;

            beforeEach(() => {
                deletedTodo = todoBuilder();

                stubData.type  = actionTypes.TODO_DELETE;
                stubData.todo = deletedTodo;
                stubState.collection.push(deletedTodo);
                stubState.count = 3;

                results = todoReducer(stubState, stubData);
            });

            it('should return the state with the deleted todo removed', () => {
                let expectedState = {
                    collection: stubState.collection.filter(todo => todo.id !== deletedTodo.id),
                    count: 2
                };

                expect(results).toEqual(expectedState);
            });

        });

        describe('and the action is TODO_COMPLETE_SUCCESSFUL', () => {
           let completedTodo,
               origTodo;

            beforeEach(() => {
                origTodo = todoBuilder();
                completedTodo = Object.assign({}, origTodo);

                completedTodo.completed = true;
                stubData.type  = actionTypes.TODO_COMPLETE_SUCCESSFUL;
                stubData.todo = completedTodo;

                stubState.collection.push(origTodo);
                stubState.count = 3;

                results = todoReducer(stubState, stubData);
            });

            it('should return the state with the completed todo', () => {
                let expectedState = {
                    collection: stubState.collection.map(todo => {
                        if(todo.id === completedTodo.id) {
                            return completedTodo;
                        }
                        return todo;
                    }),
                    count: 3
                };

                expect(results).toEqual(expectedState);
            });

        });

        describe('and the action is TODO_UPDATE_SUCCESSFUL', () => {
           let updatedTodo,
               origTodo;

            beforeEach(() => {
                origTodo = todoBuilder();
                updatedTodo = todoBuilder();

                updatedTodo.id = origTodo.id;
                stubData.type  = actionTypes.TODO_UPDATE_SUCCESSFUL;
                stubData.todo = updatedTodo;

                stubState.collection.push(origTodo);
                stubState.count = 3;

                results = todoReducer(stubState, stubData);
            });

            it('should return the state with the updated todo', () => {
                let expectedState = {
                    collection: stubState.collection.map(todo => {
                        if(todo.id === updatedTodo.id) {
                            return updatedTodo;
                        }
                        return todo;
                    }),
                    count: 3
                };

                expect(results).toEqual(expectedState);
            });

        });

    });

});