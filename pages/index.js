import { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

import '../styles.scss';

class Index extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TodoList />
            </div>
        )
    }

}

export default connect()(Index)
