import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'

import List from '@material-ui/core/List';

import TodoItem from './TodoItem';

class TodoList extends Component {

    render () {
        let todos = this.props.todos.map((todo) => {
           return (<TodoItem todo={ todo } />)
        });

        return (
            <List id="todo-list">
                {todos}
            </List>
        )
    }

}

export default connect(state => {
    return {
        todos: state.todos
    }
})(TodoList)