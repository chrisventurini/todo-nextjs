import React from "react";
import { shallow } from "enzyme/build";

import mockStoreBuilder from "../../utils/mockStoreBuilder";

import TodoListContainer from '../../../components/todo/TodoListContainer'

//Mocked imports
jest.mock('../../../services/todoSorter');
import mockTodoSorter from '../../../services/todoSorter';

describe('<TodoListContainer />', () => {
    let SUTWrapper,
        todos,
        storeData;

    beforeEach(() => {
        todos = [
            { completed: true },
            { completed: true },
            { completed: false },
            { completed: false }
        ];

        storeData = {
            todos: {
                collection: todos,
                count: todos.length
            },
            filters: {}
        };

        mockTodoSorter.mockImplementation(todos => todos);
    });

    describe('constructing and rendering', () => {

        describe('with the completed filter enabled', () => {

            beforeEach(() => {
                storeData.filters.completed = true;
                let store = mockStoreBuilder(storeData);
                SUTWrapper = shallow(<TodoListContainer store={store}/>).dive();
            });

            it('should render correctly', () => {
                expect(SUTWrapper).toMatchSnapshot();
            });

            it('should set the todos collection on the props without the completed todos', () => {
                let expectedTodos = todos.filter(todo => !todo.completed);

                expect(SUTWrapper.instance().props).toHaveProperty('todos', expectedTodos);
            });

            it('should set the todos count to the props', () => {
                expect(SUTWrapper.instance().props).toHaveProperty('count', todos.length);
            });

            it('should sort the todos with the todoSorter', () => {
                expect(mockTodoSorter).toHaveBeenCalled();
            });

            it('should pass the todos to the TodoList component', () => {
                let foundList = SUTWrapper.first(),
                    expectedTodos = todos.filter(todo => !todo.completed);

                expect(foundList.props()).toHaveProperty('todos', expectedTodos);
            });

        });

        describe('with the completed filter disabled', () => {

             beforeEach(() => {
                 storeData.filters.completed = false;
                 let store = mockStoreBuilder(storeData);
                 SUTWrapper = shallow(<TodoListContainer store={store}/>).dive();
             });

             it('should render correctly', () => {
                 expect(SUTWrapper).toMatchSnapshot();
             });

             it('should set the todos collection on the props without the completed todos', () => {
                 expect(SUTWrapper.instance().props).toHaveProperty('todos', todos);
             });

             it('should set the todos count to the props', () => {
                 expect(SUTWrapper.instance().props).toHaveProperty('count', todos.length);
             });

             it('should sort the todos with the todoSorter', () => {
                 expect(mockTodoSorter).toHaveBeenCalled();
             });

             it('should pass the todos to the TodoList component', () => {
                 let foundList = SUTWrapper.first();

                 expect(foundList.props()).toHaveProperty('todos', todos);
             });

         });

    });

});