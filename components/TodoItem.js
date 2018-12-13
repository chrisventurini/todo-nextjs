import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import moment from 'moment';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { todoEdited } from "../actions";


class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let todo = {
            ...this.props.todo
        };

        todo.completed = event.target.checked;
        this.props.dispatch(todoEdited(todo))
    }

    render() {
        let { dueDate, id, title, completed } = this.props.todo;

        return (
            <ListItem className="todo-item" >
                <Checkbox checked={completed} onChange={this.onChange} tabIndex={-1} disableRipple />
                <Link prefetch href={"/todo?id=" + id} >
                    <a>
                        <ListItemText primary={title} secondary={`Due: ${ moment(dueDate).format('MM/DD/YYYY') }`} />
                    </a>
                </Link>
            </ListItem>
        )
    }
}

export default connect((state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.id);

    return {
        todo
    };
})(TodoItem);