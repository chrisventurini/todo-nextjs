import { Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    loaderContainer: {
        marginTop: '5px',
        height: '3px',
        position: 'fixed',
        width: '100%'
    }
};

export let Loader = ({ asyncCalls, classes }) => {
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

export const _mapState = state => {
    return { asyncCalls: state.asyncCalls }
};

Loader = withStyles(styles)(Loader);

export default connect(_mapState)(Loader);
