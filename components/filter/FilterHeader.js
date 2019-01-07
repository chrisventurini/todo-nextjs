import { connect } from 'react-redux';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import CompletedFilterButton from './CompletedFilterButton';

import { mapDispatchToFilterActions } from '../../store/actions/filtering/index';

const styles = {
    filterHeader: {
        backgroundColor: 'lightgrey',
        marginTop: '64px',
        height: '45px',
        width: '100%',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',

        '& > div': {
            marginTop: '7px',
            marginLeft: '25px'
        }
    }
};

class FilterHeader extends Component {

    state = {
        filterCompleted: true
    };

    constructor(props) {
        super(props);

        this.handleCompletedClicked = this.handleCompletedClicked.bind(this);
    }

    handleCompletedClicked() {
        this.props.actions.toggleFilterCompleted();
        this.setState({
            filterCompleted: !this.state.filterCompleted
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.filterHeader} >
                <CompletedFilterButton
                    enabled={this.state.filterCompleted}
                    onClick={this.handleCompletedClicked}
                />
            </div>
        )
    }

}

const mapState = state => state;

FilterHeader = connect(mapState, mapDispatchToFilterActions)(FilterHeader);
FilterHeader = withStyles(styles)(FilterHeader);

export default FilterHeader;
