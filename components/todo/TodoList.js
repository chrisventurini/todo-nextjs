import { connect } from 'react-redux'

import todoSorter from '../../services/todoSorter';

import List from '@material-ui/core/List';
import withStyles from "@material-ui/core/styles/withStyles";

import TodoListItemContainer from './TodoListItemContainer';

const styles = {
    todoList: {
        paddingTop: '0'
    }
};

let TodoList = ({classes, todos}) => {

    let todosItems = todos.map((todo) => {
       return (<TodoListItemContainer key={todo.id} id={todo.id} todo={ todo } />)
    });

    return (
        <List className={classes.todoList} >
            {todosItems}
        </List>
    )
};

const mapState = state => {
    let todos = state.todos;

    if(state.filters && state.filters.completed) {
        todos = todos.filter(todo => !todo.completed);
    }

    todos = todoSorter(todos);

    return { todos }
};

TodoList = connect(mapState)(TodoList);
TodoList = withStyles(styles)(TodoList);

export default TodoList;