import { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { mapDispatchToTodoActions } from '../../store/actions/todos/index';
import todoSorter from '../../services/todoSorter';

import TodoList from './TodoList';


export class TodoListContainer extends Component {

    static propTypes = {
        count: propTypes.number.isRequired,
        todos: propTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        if(process.browser) {
            this._onWindowScroll = this._onWindowScroll.bind(this);
            window.addEventListener('scroll', this._onWindowScroll);
        }
    }

    _onWindowScroll(event) {
        console.log('scroll');
    }

    render() {
        let { todos } = this.props;

        return (
            <TodoList todos={todos}/>
        )
    }
}


export const _mapState = state => {
    let { collection, count } = state.todos;

    if(state.filters && state.filters.completed) {
        collection = collection.filter(todo => !todo.completed);
    }

    collection = todoSorter(collection);

    return { todos: collection, count }
};

export default connect(_mapState, mapDispatchToTodoActions)(TodoListContainer);
