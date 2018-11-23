import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { todoEdited } from '../actions';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = props.todo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
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
        console.log(this.props);

        this.props.dispatch(todoEdited({
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
    let todo = state.todos.find(todo => todo.id === ownProps.id);

    return {
        todo
    };
})(Todo);