import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';

import { mapDispatchToTodoActions } from '../../store/actions/todos/index';


class TodoListItemContainer extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let todo = {
            ...this.props.todo
        };
        todo.completed = event.target.checked;

        this.props.actions.todoUpdate(todo);
    }

    render() {
        return (
            <TodoListItem todo={this.props.todo} onChange={this.onChange} />
        )
    }
}

const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.id);
    return { todo };
};

export default connect(mapState, mapDispatchToTodoActions)(TodoListItemContainer);
