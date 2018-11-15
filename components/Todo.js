import { Component } from 'react'
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import moment from 'moment';
import React from "react";

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = props.todo;
    }

    render () {

        return (
            <form id="todo">
                <TextField
                    id="standard-name"
                    label="Title"
                    margin="normal"
                    value={this.state.title}
                />
                <TextField
                    id="due-date"
                    label="Due Date"
                    type="date"
                    value={moment(this.state.dueDate).format('YYYY-MM-DD')}
                />
                <TextField
                    id="notes"
                    label="Notes"
                    value={this.state.notes}
                />
            </form>
        )
    }

}

export default connect((state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.id);

    return {
        todo
    };
})(Todo);