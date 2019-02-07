import React from "react";
import { shallow } from "enzyme/build";

import { _mapState, TodoListContainer } from '../../../components/todo/TodoListContainer';

//Mocked imports
jest.mock('../../../services/todoSorter');
import mockTodoSorter from '../../../services/todoSorter';

describe('<TodoListContainer />', () => {
    let SUTWrapper,
        count,
        todos;

    describe('constructing and rendering', () => {

        beforeEach(() => {
            todos = [{}, {}];
            count = todos.length;
            SUTWrapper = shallow(<TodoListContainer todos={todos} count={count} />).dive();
        });

        it('should render correctly', () => {
            expect(SUTWrapper).toMatchSnapshot();
        });

        it('should pass the todos to the TodoList component', () => {
            let foundList = SUTWrapper.first();

            expect(foundList.props()).toHaveProperty('todos', todos);
        });

    });

});

describe('<TodoListContainer /> _mapState', () => {

    describe('when executing', () => {
        let results,
            todos,
            state;

        beforeEach(() => {
            todos = [
                {completed: true},
                {completed: true},
                {completed: false},
                {completed: false}
            ];

            state = {
                filters: {},
                todos: {
                    collection: todos,
                    count: todos.length
                }
            };

            mockTodoSorter.mockImplementation(todos => todos);
        });

        afterAll(() => {
            jest.resetAllMocks();
        });

        describe('with the completed filtered enabled', () => {

            beforeEach(() => {
                state.filters.completed = true;
                results = _mapState(state);
            });

            it('should set the todos collection on the props without the completed todos', () => {
                let expectedTodos = todos.filter(todo => !todo.completed);

                expect(results).toHaveProperty('todos', expectedTodos);
            });

            it('should set the todos count to the props', () => {
                expect(results).toHaveProperty('count', todos.length);
            });

            it('should sort the todos with the todoSorter', () => {
                expect(mockTodoSorter).toHaveBeenCalled();
            });

        });

        describe('with the completed filtered disabled', () => {

            beforeEach(() => {
                state.filters.completed = false;
                results = _mapState(state);
            });

            it('should set the todos collection on the props with the completed todos', () => {
                expect(results).toHaveProperty('todos', todos);
            });

            it('should set the todos count to the props', () => {
                expect(results).toHaveProperty('count', todos.length);
            });

            it('should sort the todos with the todoSorter', () => {
                expect(mockTodoSorter).toHaveBeenCalled();
            });

        });

    });

});
