import { connect } from 'react-redux'
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { toDoSubmitted } from '../actions/toDoSubmitted';

const styles = theme => ({
    form: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
        marginLeft: '10px'
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
                            <InputBase
                                id="to-do-input"
                                className={classes.toDoInput}
                                placeholder="Todo"
                                value={this.state.toDoTitle}
                                variant="outlined"
                                onChange={this.handleInputChange}
                            />
                            <Button className={classes.button}>Create Todo</Button>
                        </form>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(styles)(connect()(Header));