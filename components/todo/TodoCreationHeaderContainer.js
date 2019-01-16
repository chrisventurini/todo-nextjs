import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import TodoCreationHeader from '../../components/todo/TodoCreationHeader';

import { mapDispatchToTodoActions } from '../../store/actions/todos/index';

class TodoCreationHeaderContainer extends Component {

    state = {
        title: '',
        dueDate: new Date()
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        if (target.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.todoSave({
            ...this.state
        });

        this.setState({
           title: '',
           dueDate: new Date()
        });
    }

    render() {
        return (
            <TodoCreationHeader
                asyncCallsInProgress={this.props.asyncCalls.inProgress}
                todo={this.state}
                onInputChange={this.handleInputChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

const mapState = state => {
    return { asyncCalls: state.asyncCalls };
};

export default connect(mapState, mapDispatchToTodoActions)(TodoCreationHeaderContainer)
