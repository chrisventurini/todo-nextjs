import { connect } from 'react-redux';
import React, { Component } from 'react';
import Router from 'next/router';

import EditHeader from '../components/common/BasicNavHeader'
import Loader from '../components/async/Loader'
import TodoForm from '../components/todo/TodoForm';

import { mapDispatchToTodoActions } from '../store/actions/todos/index';


class TodoPage extends Component {

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static async getInitialProps (context) {
        let { id } = context.query;
        return { todoId: id }
    }

    handleInputChange(event) {
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

        Router.push('/');
    }

    render () {
        return (
            <div id="edit-page">
                <EditHeader />
                <Loader />
                <TodoForm todo={this.state} onSubmit={this.handleSubmit} onInputChange={this.handleInputChange}/>
            </div>
        )
    }

}

const mapState = (state, ownProps) => {
    let todo = state.todos.find(todo => todo.id === ownProps.todoId);

    return {
        todo
    };
};


export default connect(mapState, mapDispatchToTodoActions)(TodoPage)
