import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { todoEdited } from '../actions';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = props.todo;
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleCompletedChange(event) {
        this.setState({
            ...this.state,
            completed: event.target.checked
        });
    }

    handleDateChange(event) {
        let date = moment(event.target.value, 'YYYY-MM-DD').toDate();
        this.setState({
            ...this.state,
            dueDate: date
        });
    }

    handleTitleChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.dispatch(todoEdited({
            completed: this.state.completed,
            dueDate: this.state.dueDate,
            id: this.state.id,
            notes: this.state.notes,
            title: this.state.title
        }));
    }

    render () {

        return (
            <form id="todo" onSubmit={this.handleSubmit}>
                <TextField
                    id="standard-name"
                    label="Title"
                    margin="normal"
                    onChange={this.handleTitleChange}
                    value={this.state.title}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={this.handleCompletedChange}
                            checked={this.state.completed}
                            color="primary"
                            value={this.state.completed}
                        />
                    }
                    label="Completed"
                />
                <TextField
                    id="due-date"
                    label="Due Date"
                    type="date"
                    onChange={this.handleDateChange}
                    value={moment(this.state.dueDate).format('YYYY-MM-DD')}
                />
                <TextField
                    id="notes"
                    label="Notes"
                    value={this.state.notes}
                />
                <Button type="submit" variant="contained" color="primary">
                   Save
                </Button>
            </form>
        )
    }

}

export default connect((state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.todoId);

    return {
        todo
    };
})(Todo);