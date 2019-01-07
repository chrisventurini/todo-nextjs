import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import CreationHeader from '../components/todo/CreationHeader';
import FilterHeader from '../components/filter/FilterHeader';
import TodoList from '../components/todo/TodoList';

import { mapDispatchToTodoActions } from '../store/actions/todos/index';

class Index extends Component {

    state = {
        todoTitle: '',
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
        this.props.actions.todoSubmitted({
            ...this.state
        });

        this.setState({
           title: '',
           dueDate: new Date()
        });
    }

    render() {
        return (
            <div>
                <CreationHeader todo={this.state} onInputChange={this.handleInputChange} onSubmit={this.handleSubmit}/>
                <FilterHeader />
                <TodoList />
            </div>
        )
    }
}

const mapState = state => state;

export default connect(mapState, mapDispatchToTodoActions)(Index)
