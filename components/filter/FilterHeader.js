import propTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import withStyles from "@material-ui/core/styles/withStyles";

const completedFilterBtn = {
    marginTop: '7px',
    marginLeft: '25px'
};

const styles = {
    filterHeader: {
        backgroundColor: '#95B8D1',
        marginTop: '64px',
        height: '45px',
        width: '100%',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },

    completedFilterBtn: {
        ...completedFilterBtn
    },

    completedFilterBtnDisabled: {
        ...completedFilterBtn,
        opacity: 0.6
    }
};

const FilterHeader = ({asyncCallsInProgress, classes, completedFiltered, onCompletedClick}) => {

    let icon = completedFiltered ? (<RadioButtonChecked />) : (<RadioButtonUnchecked/>),

        completedClasses = asyncCallsInProgress ? classes.completedFilterBtnDisabled : classes.completedFilterBtn;

    return (
        <div className={classes.filterHeader} >
            <Chip
                className={completedClasses}
                disabled={asyncCallsInProgress}
                icon={icon}
                label="Filter Completed"
                clickable={!asyncCallsInProgress}
                onClick={onCompletedClick}
                color="primary"
            />
        </div>
    )
};

FilterHeader.propTypes = {
    asyncCallsInProgress: propTypes.bool.isRequired,
    classes: propTypes.object.isRequired,
    completedFiltered: propTypes.bool.isRequired,
    onCompletedClick: propTypes.func.isRequired
};

export default withStyles(styles)(FilterHeader);

