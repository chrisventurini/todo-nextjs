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

let Loader = ({ asyncCalls, classes }) => {
    let loader = (asyncCalls.inProgress) ? (<LinearProgress />) : (<Fragment />);

    return (
        <div className={classes.loaderContainer}>
            {loader}
        </div>
    );
};

const mapState = state => {
    return { asyncCalls: state.asyncCalls}
};

Loader = connect(mapState)(Loader);
Loader = withStyles(styles)(Loader);

export default Loader;