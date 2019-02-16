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

    });

});