import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { mapDispatchToTodoActions } from '../actions';

const styles = theme => ({
    form: {
        flexGrow: 1,
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

class CreationHeader extends Component {

    state = {
        todoTitle: '',
        todoDate: new Date()
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        if (target.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.todoSubmitted({
            ...this.state
        });

        this.setState({
           title: '',
           dueDate: new Date()
        });
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
                                placeholder="Title"
                                name="title"
                                value={this.state.title}
                                variant="outlined"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                id="due-date"
                                className={classes.dateInput}
                                label="Due Date"
                                name="dueDate"
                                type="date"
                                value={moment(this.state.dueDate).format('YYYY-MM-DD')}
                                onChange={this.handleInputChange}
                            />
                            <Button type='submit' className={classes.button}>Create Todo</Button>
                        </form>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

const mapState = state => state;

export default withStyles(styles)(connect(mapState, mapDispatchToTodoActions)(CreationHeader));
