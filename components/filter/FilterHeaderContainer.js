import { connect } from 'react-redux';
import { Component } from 'react';
import propTypes from 'prop-types';

import FilterHeader from './FilterHeader';

import { mapDispatchToFilterActions } from '../../store/actions/filtering';


export class FilterHeaderContainer extends Component {

    static propTypes = {
        asyncCalls: propTypes.object.isRequired,
        filters: propTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            filterCompleted: props.filters.completed
        };

        this.handleCompletedClicked = this.handleCompletedClicked.bind(this);
    }

    handleCompletedClicked() {
        let filterCompleted = !this.state.filterCompleted;
        this.props.actions.setFilterCompleted(filterCompleted);
        this.setState({ filterCompleted });
    }

    render() {
        return (
                <FilterHeader
                    asyncCallsInProgress={this.props.asyncCalls.inProgress}
                    completedFiltered={this.state.filterCompleted}
                    onCompletedClick={this.handleCompletedClicked}
                />
        )
    }
}

export const _mapState = state => {
    return {
        asyncCalls: state.asyncCalls,
        filters: state.filters
    };
};

export default connect(_mapState, mapDispatchToFilterActions)(FilterHeaderContainer);

