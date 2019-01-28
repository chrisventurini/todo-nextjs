import { Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    loaderContainer: {
        marginTop: '5px',
        height: '3px',
        position: 'fixed',
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

Loader.propTypes = {
    asyncCalls: propTypes.object.isRequired,
    classes: propTypes.object.isRequired,
};

const mapState = state => {
    return { asyncCalls: state.asyncCalls}
};

Loader = connect(mapState)(Loader);
Loader = withStyles(styles)(Loader);

export default Loader;