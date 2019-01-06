import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { KeyboardArrowLeft } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


export default () => {

    return (
        <AppBar id="header">
            <Toolbar>
                <Link>
                    <a href="/">
                        <KeyboardArrowLeft fontSize="large"/>
                    </a>
                </Link>
                <Typography variant="h6" color="inherit" />
            </Toolbar>
        </AppBar>
    );
}
