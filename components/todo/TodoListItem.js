import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import moment from 'moment';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";

import { mapDispatchToTodoActions } from '../../store/actions/todos/index';


const todoItemStyle = {
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

class TodoListItem extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let todo = {
            ...this.props.todo
        };
        todo.completed = event.target.checked;

        this.props.actions.todoEdited(todo);
    }

    render() {
        let { classes, todo } = this.props,

            dueDate = moment(todo.dueDate).format('MM/DD/YYYY');

        return (
            <ListItem className={todo.completed ? classes.completedTodoItem : classes.todoItem}>
                <Checkbox checked={todo.completed} onChange={this.onChange} tabIndex={-1} disableRipple />
                <Link prefetch href={{ pathname: "/todo", query:{ id: todo.id } }}>
                    <a>
                        <ListItemText primary={todo.title} secondary={`Due: ${ dueDate }`} />
                    </a>
                </Link>
            </ListItem>
        )
    }
}

const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.id);
    return { todo };
};

TodoListItem = connect(mapState, mapDispatchToTodoActions)(TodoListItem);
TodoListItem = withStyles(styles)(TodoListItem);

export default TodoListItem;