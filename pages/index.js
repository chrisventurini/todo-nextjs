import { Component } from 'react';

import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeaderContainer from '../components/filter/FilterHeaderContainer';
import Loader from '../components/async/Loader';
import TodoListContainer from '../components/todo/TodoListContainer';

import store from '../store';
import { actions as filterActions } from '../store/actions/filtering';
import { actions as todoActions } from '../store/actions/todos';
import todoService from '../services/todoService';

class Index extends Component {

    static async getInitialProps(context) {

        if(process.browser) {
            return {};
        }

        let filterCompleted  = context.query.filterCompleted !== 'false',

            data = await todoService.fetchAll({ completed: !filterCompleted });

        store.dispatch(todoActions.todoLoad(data));
        store.dispatch(filterActions.setFilterCompleted(filterCompleted));

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
