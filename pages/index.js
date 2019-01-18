import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeaderContainer from '../components/filter/FilterHeaderContainer';
import Loader from '../components/async/Loader';
import TodoListContainer from '../components/todo/TodoListContainer';

import store from '../store';
import { actions } from '../store/actions/todos';

class Index extends Component {

    static async getInitialProps() {

        if(process.browser) {
            return {};
        }

        let response = await fetch('http://localhost:3000/api/todos?filterCompleted=false'),
            todos = await response.json();

        store.dispatch(actions.todoInitialLoad(todos));

        return { };
    }

    render () {
        return (
            <div>
                <TodoCreationHeaderContainer />
                <FilterHeaderContainer />
                <Loader/>
                <TodoListContainer todos={this.props.todos} />
            </div>
        );
    }
}

export default Index;
