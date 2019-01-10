import { Fragment } from 'react';
import { connect } from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    loaderContainer: {
        height: '2px',
        width: '100%'
    }
};

let Loader = ({ asyncCallsInProgress, classes }) => {
    let loader = (asyncCallsInProgress > 0) ? (<LinearProgress />) : (<Fragment />);

    return (
        <div className={classes.loaderContainer}>
            {loader}
        </div>
    );
};

const mapState = state => {
    return { asyncCallsInProgress: state.asyncCallsInProgress }
};

Loader = connect(mapState)(Loader);
Loader = withStyles(styles)(Loader);

export default Loader;