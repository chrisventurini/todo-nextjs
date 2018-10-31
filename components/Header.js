import { connect } from 'react-redux'
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { toDoSubmitted } from '../actions/toDoSubmitted';

const styles = theme => ({
    form: {
        flexGrow: 1,
    },
    color: {
      color: 'white'
    },
    toDoInput: {
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    }
});

class Header extends Component {

    state = {
        toDoTitle: ''
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    _setToDoState(title) {
        this.setState({
            ...this.state,
            toDoTitle: title
        });
    }

    handleInputChange(event) {
        this._setToDoState(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(toDoSubmitted({
            title: this.state.toDoTitle
         }));
        this._setToDoState('');
    }

    render() {
        let { classes } = this.props;

        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <TextField
                                id="to-do-input"
                                className={classes.toDoInput}
                                label="Enter To Do"
                                placeholder="To Do"
                                margin="normal"
                                value={this.state.toDoTitle}
                                variant="outlined"
                                onChange={this.handleInputChange}
                            />
                            <Button className={classes.color}>Create</Button>
                        </form>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(styles)(connect()(Header));