import { connect } from 'react-redux';
import { Component } from 'react';
import propTypes from 'prop-types';

import FilterHeader from './FilterHeader';

import { mapDispatchToFilterActions } from '../../store/actions/filtering';


class FilterHeaderContainer extends Component {

    static propTypes = {
        asyncCalls: propTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            filterCompleted: props.filters.completed
        };

        this.handleCompletedClicked = this.handleCompletedClicked.bind(this);
    }

    handleCompletedClicked() {
        this.props.actions.toggleFilterCompleted();
        this.setState({
            filterCompleted: !this.state.filterCompleted
        });
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

const mapState = state => {
    return { asyncCalls: state.asyncCalls, filters: state.filters };
};

export default connect(mapState, mapDispatchToFilterActions)(FilterHeaderContainer);

