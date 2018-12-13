import { connect } from 'react-redux';
import React, { Component } from 'react';

import Chip from '@material-ui/core/Chip';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';

class FilterHeader extends Component {

    state = {
        filterCompleted: true
    };

    constructor(props) {
        super(props);

        this.handleFilterClicked = this.handleFilterClicked.bind(this);
    }

    handleFilterClicked() {
        this.setState({
            filterCompleted: !this.state.filterCompleted
        });
    }

    render() {
        return (
            <div id="filter-header">
                <Chip
                    icon={this.state.filterCompleted ? <RadioButtonChecked /> : <RadioButtonUnchecked/> }
                    label="Filter Completed"
                    clickable
                    onClick={this.handleFilterClicked}
                    color="primary"
                />
            </div>
        )
    }

}

export default connect()(FilterHeader);