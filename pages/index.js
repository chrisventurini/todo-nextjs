import { Component } from 'react';
import { connect } from 'react-redux';
import CreationHeader from '../components/CreationHeader';
import TodoList from '../components/TodoList';

import '../styles.scss';

class Index extends Component {

    render() {
        return (
            <div>
                <CreationHeader/>
                <TodoList />
            </div>
        )
    }

}

export default connect()(Index)
