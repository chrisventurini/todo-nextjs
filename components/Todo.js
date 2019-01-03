import React, { Component } from 'react'
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { mapDispatchToTodoActions } from '../actions/todos/index';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = props.todo;
        this.state.notes = this.state.notes || '';

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        if (event.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.actions.todoEdited({...this.state});

        Router.push('/');
    }

    render () {
        let dueDate = moment(this.state.dueDate).format('YYYY-MM-DD');

        return (
            <form id="todo-edit" onSubmit={this.handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    margin="normal"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                />
                <FormControlLabel
                    id="todo-edit-check"
                    control={
                        <Checkbox
                            name="completed"
                            onChange={this.handleInputChange}
                            checked={this.state.completed}
                            color="primary"
                        />
                    }
                    label="Completed"
                />
                <TextField
                    id="due-date"
                    label="Due Date"
                    type="date"
                    name="dueDate"
                    onChange={this.handleInputChange}
                    value={dueDate}
                />
                <TextField
                    id="notes"
                    label="Notes"
                    name="notes"
                    onChange={this.handleInputChange}
                    value={this.state.notes}
                />
                <div id="todo-edit-controls">
                    <Button type="submit" variant="contained" color="primary">
                       Save
                    </Button>
                    <Link href="/">
                        <Button variant="contained" color="secondary">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        )
    }
}


const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.todoId);

    return {
        todo
    };
};

export default connect(mapState, mapDispatchToTodoActions)(Todo);