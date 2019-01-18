import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeaderContainer from '../components/filter/FilterHeaderContainer';
import Loader from '../components/async/Loader';
import TodoListContainer from '../components/todo/TodoListContainer';


class Index extends Component {

    static async getInitialProps() {

        if(process.browser) {
            return {};
        }

        let response = await fetch('http://localhost:3000/api/todos', {
                headers: {
                    'cache-control': 'no-cache',
                    'pragma': 'no-cache'
                }
            }),

            todos = await response.json();

        return { todos };
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
