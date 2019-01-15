import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';

import { mapDispatchToTodoActions } from '../../store/actions/todos/index';


class TodoListItemContainer extends Component {

    constructor(props) {
        super(props);

        this.onCheckClicked = this.onCheckClicked.bind(this);
    }

    onCheckClicked(event) {
        let todo = {
            ...this.props.todo
        };
        todo.completed = event.target.checked;

        this.props.actions.todoComplete(todo);
    }

    render() {
        return (
            <TodoListItem asyncCallsInProgress={this.props.asyncCalls.inProgress} todo={this.props.todo}  onCheckClicked={this.onCheckClicked} />
        )
    }
}

const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.id);
    return {
        asyncCalls: state.asyncCalls,
        todo
    };
};

export default connect(mapState, mapDispatchToTodoActions)(TodoListItemContainer);
