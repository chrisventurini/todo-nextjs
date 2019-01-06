import { connect } from 'react-redux';
import React, { Component } from 'react';
import Router from 'next/router';

import EditHeader from '../components/EditHeader'
import Todo from '../components/Todo';

import { mapDispatchToTodoActions } from '../actions/todos/index';

class TodoPage extends Component {

    constructor(props) {
        super(props);

        this.state = props.todo;
        this.state.notes = this.state.notes || '';

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static async getInitialProps (context) {
        let { id } = context.query;

        return {
            todoId: id
        }
    }


    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

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

        this.props.actions.todoEdited({...this.state});

        Router.push('/');
    }

    render () {
        return (
            <div id="edit-page">
                <EditHeader />
                <Todo todo={this.state} onSubmit={this.handleSubmit} onInputChange={this.handleInputChange}/>
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
