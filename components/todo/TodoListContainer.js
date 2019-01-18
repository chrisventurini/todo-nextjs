import { connect } from 'react-redux';
import propTypes from 'prop-types';

import todoSorter from '../../services/todoSorter';

import TodoList from './TodoList';


let TodoListContainer = ({todos}) => {
    return (
        <TodoList todos={todos}/>
    )
};

TodoListContainer.propTypes = {
    todos: propTypes.array.isRequired
};

const mapState = state => {
    let { todos } = state;

    if(state.filters && state.filters.completed) {
        todos = todos.filter(todo => !todo.completed);
    }

    todos = todoSorter(todos);

    return { todos }
};

export default connect(mapState)(TodoListContainer);
