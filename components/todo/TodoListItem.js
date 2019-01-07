import Link from 'next/link';
import moment from 'moment';

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

const TodoListItem = ({classes, todo, onChange}) => {

    let  dueDate = moment(todo.dueDate).format('MM/DD/YYYY');

    return (
        <ListItem className={todo.completed ? classes.completedTodoItem : classes.todoItem}>
            <Checkbox checked={todo.completed} onChange={onChange} tabIndex={-1} disableRipple />
            <Link prefetch href={{ pathname: "/todo", query:{ id: todo.id } }}>
                <a>
                    <ListItemText primary={todo.title} secondary={`Due: ${ dueDate }`} />
                </a>
            </Link>
        </ListItem>
    )
};


export default withStyles(styles)(TodoListItem);

