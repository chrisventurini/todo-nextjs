import React from "react";
import { mount } from "enzyme/build";
import Router from 'next/router';

import TodoListItem from '../../../components/todo/TodoListItem';

import { mockRouterBuilder } from '../../../__testutils__/mockBuilders'

describe('<TodoListItem />', () => {
    let SUTWrapper,
        asyncCallsInProgress,
        stubClasses,
        stubOnCheckedClicked,
        todo;

    beforeEach(() => {
        Router.router = mockRouterBuilder();

        asyncCallsInProgress = true;
        stubClasses = {};
        stubOnCheckedClicked = jest.fn();
        todo = {
           dueDate: new Date(2000, 1, 1),
           id: 'bc995789-f666-4f15-8fa4-739d3182a808'
        };
    });

    describe('when rendering', () => {

        describe('with base functionality', ()=> {

            beforeEach(() => {
                SUTWrapper = mount(
                    <TodoListItem
                        asyncCallsInProgress={asyncCallsInProgress}
                        classes={stubClasses}
                        onCheckClicked={stubOnCheckedClicked}
                        todo={todo}
                    />);
            });

            it('should pass the onCheckedClicked function to the onChange prop of the checkbox', () => {
                let foundEl = SUTWrapper.find('Checkbox');

                expect(foundEl.props()).toHaveProperty('onChange', stubOnCheckedClicked);
            });

        });

        describe('with the todo being completed', () => {

            beforeEach(() => {
                todo.completed = true;
                stubClasses.completedTodoItem = "completedTodoItem";

                SUTWrapper = mount(
                    <TodoListItem
                        asyncCallsInProgress={asyncCallsInProgress}
                        classes={stubClasses}
                        onCheckClicked={stubOnCheckedClicked}
                        todo={todo}
                    />);
            });

            it('should render correctly', () => {
                expect(SUTWrapper).toMatchSnapshot();
            });

            it('should assign the completedTodoItem class to the ListItem component', () => {
               let foundEl = SUTWrapper.find('ListItem');

               expect(foundEl.hasClass(stubClasses.completedTodoItem)).toEqual(true);
            });

        });

        describe('with the todo not being completed', () => {

            beforeEach(() => {
                todo.completed = false;

                SUTWrapper = mount(
                    <TodoListItem
                        asyncCallsInProgress={asyncCallsInProgress}
                        classes={stubClasses}
                        onCheckClicked={stubOnCheckedClicked}
                        todo={todo}
                    />);
            });

            it('should render correctly', () => {
                expect(SUTWrapper).toMatchSnapshot();
            });

        });

    });

});