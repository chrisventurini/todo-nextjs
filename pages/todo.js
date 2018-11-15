import { connect } from 'react-redux';
import { Component } from 'react';
import Header from '../components/Header';
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
                <Header />
                <Todo id={this.props.id}/>
            </div>
        )
    }

}

export default connect()(TodoPage)
