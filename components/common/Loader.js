import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

const styles = {
};

const Loader = ({ classes }) => {

    return (
        <LinearProgress />
    );
};

export default withStyles(styles)(Loader);