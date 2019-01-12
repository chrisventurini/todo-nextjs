import { connect } from 'react-redux';
import React, { Component } from 'react';

import EditHeader from '../components/common/BasicNavHeader'
import Loader from '../components/async/Loader'
import TodoFormContainer from '../components/todo/TodoFormContainer';



class TodoPage extends Component {

    static async getInitialProps (context) {
        let { id } = context.query;
        return { todoId: id }
    }

    render () {
        return (
            <div id="edit-page">
                <EditHeader />
                <Loader />
                <TodoFormContainer todoId={this.props.todoId} />
            </div>
        )
    }

}

export default TodoPage;
