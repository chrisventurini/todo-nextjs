import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { KeyboardArrowLeft } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    header: {
        color: 'white',

        '& *': {
            color: 'white'
        }
    }
};

const BasicNavHeader = ({ classes }) => {

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Link href="/">
                    <a>
                        <KeyboardArrowLeft fontSize="large"/>
                    </a>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(BasicNavHeader);