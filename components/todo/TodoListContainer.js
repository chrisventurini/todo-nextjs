import { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { actions, mapDispatchToTodoActions } from '../../store/actions/todos';
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

    _onWindowScroll() {
        let { count, todos } = this.props;

        if(count <= todos.length ||
          (window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
            return;
        }

        this.props.actions.todoFetchPage();
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
