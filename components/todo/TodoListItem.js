import moment from 'moment';
import propTypes from 'prop-types';

import Link from 'next/link';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";


const todoItemStyle = {
    paddingBottom: '0',
    paddingTop: '0',

    '&:hover': {
        backgroundColor: '#E8DDB5'
    },

    '& a': {
        padding: '11px 0px',
        textDecoration: 'none',
        width: '100%'
    },

    '&:not(:first-child)': {
        borderTop: 'black 1px solid'
    }
};

const styles = {
    todoItem: todoItemStyle,
    completedTodoItem: {
        ...todoItemStyle,
        opacity: 0.6
    }
};

const TodoListItem = ({asyncCallsInProgress, classes, onCheckClicked, todo}) => {

    let  dueDate = moment(todo.dueDate).format('MM/DD/YYYY'),
         itemClass = classes.todoItem;

    if(todo.completed || asyncCallsInProgress) {
        itemClass = classes.completedTodoItem;
    }

    return (
        <ListItem className={itemClass}>
            <Checkbox
                disabled={asyncCallsInProgress}
                checked={todo.completed}
                onChange={onCheckClicked}
                tabIndex={-1}
                disableRipple
            />
            <Link prefetch href={{ pathname: "/todo", query:{ id: todo.id } }}>
                <a>
                    <ListItemText primary={todo.title} secondary={`Due: ${ dueDate }`} />
                </a>
            </Link>
        </ListItem>
    )
};

TodoListItem.propTypes = {
    asyncCallsInProgress: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired,
    onCheckClicked: propTypes.func.isRequired,
    todo: propTypes.object.isRequired
};

export default withStyles(styles)(TodoListItem);

