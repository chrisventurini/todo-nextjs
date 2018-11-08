import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch'

import List from '@material-ui/core/List';

import TodoItem from './TodoItem';

class TodoList extends Component {

    static async getInitialProps() {
        let res = await fetch('/api/todos');
        let data =  await res.json();

        console.log('init props: ' + data);
        return data;
    }

    render () {
        let todos = this.props.todos.map((todo) => {
           return (<TodoItem todo={ todo } />)
        });

        return (
            <List id="to-do-list">
                {todos}
            </List>
        )
    }

}

export default connect(state => {
    console.log('connect called: ' + state);
    return {
        todos: state.todos
    }
})(TodoList)