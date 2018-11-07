import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { todoSubmitted } from '../actions/todoSubmitted';

const styles = theme => ({
    form: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
        marginLeft: '20px'
    },
    dateInput: {
        color: 'white',
        marginLeft: '20px'
    },
    toDoInput: {
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        width: '300px'
    }
});

class Header extends Component {

    state = {
        todoTitle: '',
        todoDate: new Date()
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
        this.handleTodoDateChange = this.handleTodoDateChange.bind(this);
    }

    _setTodoDate(date) {
        this.setState({
            ...this.state,
            todoDate: date
        })
    }

    _setToDoTitle(title) {
        this.setState({
            ...this.state,
            todoTitle: title
        });
    }

    handleTodoDateChange(event) {
        let date = moment(event.target.value, 'YYYY-MM-DD').toDate();
        this._setTodoDate(date);
    }

    handleTodoInputChange(event) {
        this._setToDoTitle(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(todoSubmitted({
            dueDate: this.state.todoDate,
            id: Math.round(Math.random() * 100),
            title: this.state.todoTitle
         }));
        this._setToDoTitle('');
    }

    render() {
        let { classes } = this.props;

        return (
            <AppBar id="header">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <InputBase
                                id="to-do-input"
                                className={classes.toDoInput}
                                placeholder="Todo"
                                value={this.state.todoTitle}
                                variant="outlined"
                                onChange={this.handleTodoInputChange}
                            />
                            <TextField
                                id="due-date"
                                className={classes.dateInput}
                                label="Due Date"
                                type="date"
                                value={moment(this.state.todoDate).format('YYYY-MM-DD')}
                                onChange={this.handleTodoDateChange}
                            />
                            <Button type='submit' className={classes.button}>Create Todo</Button>
                        </form>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(styles)(connect()(Header));