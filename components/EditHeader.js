import { connect } from 'react-redux';
import React, { Component } from 'react';
import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { KeyboardArrowLeft } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


class EditHeader extends Component {

    state = {
        todoTitle: '',
        todoDate: new Date()
    };

    render() {

        return (
            <AppBar id="header">
                <Toolbar>
                    <Link>
                        <a href="/">
                            <KeyboardArrowLeft fontSize="large" />
                        </a>
                    </Link>
                    <Typography variant="h6" color="inherit">

                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default connect()(EditHeader);
