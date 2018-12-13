import { Component } from 'react';
import { connect } from 'react-redux';
import CreationHeader from '../components/CreationHeader';
import FilterHeader from '../components/FilterHeader';
import TodoList from '../components/TodoList';

import '../styles.scss';

class Index extends Component {

    render() {
        return (
            <div>
                <CreationHeader />
                <FilterHeader />
                <TodoList />
            </div>
        )
    }

}

export default connect()(Index)
