import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';

import TodoForm from './TodoForm';

import { mapDispatchToTodoActions } from '../../store/actions/todos';


class TodoFormContainer extends Component {

    static propTypes = {
        todoId: PropTypes.string.isRequired
    };

    state = {
        completed: false,
        dueDate: new Date(),
        notes: '',
        title: ''
    };

    constructor(props) {
        super(props);


        if(props.todo) {
            this.state = props.todo;
            this.state.notes = props.todo.notes || '';
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _navToHome() {
        Router.push('/');
    }

    handleDelete(event) {
        event.preventDefault();

        this.props.actions.todoDelete(this.props.todo);

        this._navToHome();
    }

    handleInputChange(event) {
        event.preventDefault();

        let target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        if (event.type === 'date') {
            value = moment(value).format('YYYY-MM-DD');
        }

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.actions.todoUpdate({...this.state});

        this._navToHome();
    }

    render () {
        return (
            <TodoForm todo={this.state} onDelete={this.handleDelete} onSubmit={this.handleSubmit} onInputChange={this.handleInputChange}/>
        )
    }

}

const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.todoId);

    return {
        todo
    };
};

export default connect(mapState, mapDispatchToTodoActions)(TodoFormContainer)
