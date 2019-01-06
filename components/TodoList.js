import React, { Component } from 'react';
import { connect } from 'react-redux'

import List from '@material-ui/core/List';

import TodoItem from './TodoItem';

import todoSorter from '../services/todoSorter';

class TodoList extends Component {

    render () {
        let todos = this.props.todos.map((todo) => {
           return (<TodoItem key={todo.id} id={todo.id} todo={ todo } />)
        });

        return (
            <List id="todo-list">
                {todos}
            </List>
        )
    }

}

const mapState = state => {
    let todos = state.todos;

    if(state.filters && state.filters.completed) {
        todos = todos.filter(todo => !todo.completed);
    }

    todos = todoSorter(todos);

    return { todos }
};

export default connect(mapState)(TodoList);