import { Component } from 'react';
import { connect } from 'react-redux';

import CreationHeader from '../components/CreationHeader';
import FilterHeader from '../components/FilterHeader';
import TodoList from '../components/TodoList';

import { mapDispatchToTodoActions } from '../actions/todos/index';

import '../styles.scss';

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
