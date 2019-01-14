import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeader from '../components/filter/FilterHeader';
import Loader from '../components/async/Loader';
import TodoList from '../components/todo/TodoList';


class Index extends Component {

    render () {
        return (
            <div>
                <TodoCreationHeaderContainer/>
                <FilterHeader/>
                <Loader/>
                <TodoList />
            </div>
        );
    }
}

export default Index;
