import React from "react";
import * as propTypes from "prop-types";
import { shallow } from "enzyme/build";

import ConnectedTodoListContainer, { _mapState, TodoListContainer } from '../../../components/todo/TodoListContainer';

// Test utils
import { mockStoreBuilder } from "../../../__testutils__/mockBuilders"

// Mocked imports
jest.mock('../../../services/todoSorter');
import mockTodoSorter from '../../../services/todoSorter';

describe('<TodoListContainer />', () => {
    let SUTWrapper,
        count,
        todos;

    beforeEach(() => {
        todos = [
            {completed: true},
            {completed: true},
            {completed: false},
            {completed: false}
        ];

        count = todos.length;
        mockTodoSorter.mockImplementation(todos => todos);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should have static propTypes defined', () => {
        let expectedPropTypes = {
            count: propTypes.number.isRequired,
            todos: propTypes.array.isRequired
        };

        expect(TodoListContainer).toHaveProperty('propTypes', expectedPropTypes);
    });

    describe('when connected to redux', function () {
        let stubState,
            stubStore;

        beforeEach(() => {
            stubState = {
                todos: {
                    collection: todos,
                    count: todos.length
                },
                filters: {}
            };
        });

        describe('with the completed filter enabled', () => {

            beforeEach(() => {
                stubState.filters.completed = true;

                stubStore = mockStoreBuilder(stubState);

                SUTWrapper = shallow(<ConnectedTodoListContainer store={stubStore}/>).dive();
            });

            it('should render correctly', () => {
                expect(SUTWrapper).toMatchSnapshot();
            });

        });

        describe('with the completed filter not enabled', () => {

            beforeEach(() => {
                stubState.filters.completed = false;

                stubStore = mockStoreBuilder(stubState);

                SUTWrapper = shallow(<ConnectedTodoListContainer store={stubStore}/>).dive();
            });

            it('should render correctly', () => {
                expect(SUTWrapper).toMatchSnapshot();
            });

        });

    });

    describe('when constructing', () => {

        describe('within the browser', () => {

            beforeEach(() => {
                process.browser = true;

                window.addEventListener = jest.fn();

                SUTWrapper = shallow(<TodoListContainer todos={todos} count={count} />);
            });

            it('should have a set the scroll event to the instance onWindowScroll function ', () => {
                expect(window.addEventListener).toHaveBeenCalledWith('scroll', SUTWrapper.instance()._onWindowScroll);
            });

        });

        describe('not within the browser', () => {

            beforeEach(() => {
                process.browser = false;

                window.addEventListener = jest.fn();

                SUTWrapper = shallow(<TodoListContainer todos={todos} count={count} />);
            });

            it('should have a set the scroll event to the instance onWindowScroll function ', () => {
                expect(window.addEventListener).not.toHaveBeenCalled();
            });

        });

    });

    describe('when handling the window scrolling', () => {
        let mockActions,
            mockTodoFetchPage;

        beforeEach(() => {
            window.innerHeight = 5;
            document.body = document.createElement('body');

            mockTodoFetchPage = jest.fn();

            mockActions = {
                actions: {
                    todoFetchPage: mockTodoFetchPage
                }
            };
        });

        describe('with there being more todos to fetch', () => {

            beforeEach((done) => {
                count = 10;

                SUTWrapper = shallow(<TodoListContainer todos={todos} count={count} />);

                SUTWrapper.setProps(mockActions, done);
            });

            describe('and the window has not scrolled to the bottom', () => {

                beforeEach(() => {
                    window.scrollY = -10;
                    SUTWrapper.instance()._onWindowScroll();
                });

                it('should call the action todoFetchPage', () => {
                   expect(mockTodoFetchPage).not.toHaveBeenCalled();
                });

            });

            describe('and the window is scrolled to the bottom', () => {

                beforeEach(() => {
                    window.scrollY = 10;
                    SUTWrapper.instance()._onWindowScroll();
                });

                it('should call the action todoFetchPage', () => {
                   expect(mockTodoFetchPage).toHaveBeenCalled();
                });

            });

        });

        describe('with there being no more todos to fetch', () => {

            beforeEach((done) => {
                SUTWrapper = shallow(<TodoListContainer todos={todos} count={count} />);

                SUTWrapper.setProps(mockActions, done);
            });

            describe('and the window is scrolled to the bottom', () => {

                beforeEach(() => {
                    SUTWrapper.instance()._onWindowScroll();
                });

                it('should not call the action todoFetchPage', () => {
                   expect(mockTodoFetchPage).not.toHaveBeenCalled();
                });

            });

        });

    });

    describe('when rendering', () => {

        beforeEach(() => {
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

    describe('_mapState', () => {

        describe('when executing', () => {
            let results,
                state;

            beforeEach(() => {
                state = {
                    filters: {},
                    todos: {
                        collection: todos,
                        count: todos.length
                    }
                };

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

});


