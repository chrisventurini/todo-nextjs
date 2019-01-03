import { connect } from 'react-redux';
import React, { Component } from 'react';

import EditHeader from '../components/EditHeader'
import Todo from '../components/Todo';

import '../styles.scss';

class TodoPage extends Component {

    static async getInitialProps (context) {
        let { id } = context.query;

        return {
            todoId: id
        }
    }

    render () {
        return (
            <div id="edit-page">
                <EditHeader />
                <Todo todoId={this.props.todoId}/>
            </div>
        )
    }

}

export default connect()(TodoPage)
