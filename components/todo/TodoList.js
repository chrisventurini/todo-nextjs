import propTypes from 'prop-types';

import List from '@material-ui/core/List';
import withStyles from "@material-ui/core/styles/withStyles";

import TodoListItemContainer from './TodoListItemContainer';

const styles = {
    todoList: {
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        marginTop: '105px',
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

TodoList.propTypes = {
    classes: propTypes.object.isRequired,
    todos: propTypes.array.isRequired
};

export default withStyles(styles)(TodoList);
