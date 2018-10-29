import '../styles.scss';

import { Component } from 'react';

import Header from '../components/Header'
import TodoList from '../components/ToDoList'

class Index extends Component {

    render() {
       return (
            <div>
                <Header />
                <TodoList />
            </div>
       )
    }

}

export default Index;