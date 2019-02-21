import { Component } from 'react';

import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeaderContainer from '../components/filter/FilterHeaderContainer';
import Loader from '../components/async/Loader';
import TodoListContainer from '../components/todo/TodoListContainer';

import store from '../store';
import { actions } from '../store/actions/todos';
import todoService from '../services/todoService';

class Index extends Component {

    static async getInitialProps(context) {

        if(process.browser) {
            return {};
        }

        let { completed } = context.query,

            data = await todoService.fetchAll({ completed });

        store.dispatch(actions.todoLoad(data));

        return {};
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
