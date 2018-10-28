import { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        TO DO!
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default Header;