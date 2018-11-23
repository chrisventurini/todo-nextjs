import { connect } from 'react-redux';
import React, { Component } from 'react';
import EditHeader from '../components/EditHeader'
import Todo from '../components/Todo';

import '../styles.scss';

class TodoPage extends Component {

    static async getInitialProps (context) {
        let { id } = context.query;

        return {
            id: id
        }
    }

    render () {
        return (
            <div>
                <EditHeader />
                <Todo id={this.props.id}/>
            </div>
        )
    }

}

export default connect()(TodoPage)
