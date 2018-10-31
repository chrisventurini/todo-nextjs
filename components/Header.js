import { connect } from 'react-redux'
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { toDoSubmitted } from '../actions/toDoSubmitted';

class Header extends Component {

    state = {
        toDoValue: ''
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    _setToDoValue(value) {
        this.setState({
            ...this.state,
            toDoValue: value
        });
    }

    handleInputChange(event) {
        console.log(event);
        this._setToDoValue(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(toDoSubmitted(this.state.toDoValue));
        this._setToDoValue('');
    }

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <TextField
                                id="to-do-input"
                                ref={this.todoInput}
                                label="Enter To Do"
                                placeholder="To Do"
                                margin="normal"
                                value={this.state.toDoValue}
                                variant="outlined"
                                onChange={this.handleInputChange}
                            />
                        </form>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default connect()(Header);