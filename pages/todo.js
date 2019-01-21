import { Component } from 'react';

import EditHeader from '../components/common/BasicNavHeader'
import Loader from '../components/async/Loader'
import TodoFormContainer from '../components/todo/TodoFormContainer';

import store from '../store';
import { actions } from '../store/actions/todos';
import todoService from '../services/todoService';


class TodoPage extends Component {

    static async getInitialProps (context) {
        let { id } = context.query;

        if(process.browser) {
            return { id };
        }

        let data = await todoService.fetchAll(),

            todo = data.collection.find(todo => todo.id === id);

        store.dispatch(actions.todoLoad(data));

        return { todo, id };
    }

    render () {
        let { todo, id } = this.props;

        return (
            <div id="edit-page">
                <EditHeader />
                <Loader />
                <TodoFormContainer todo={todo} todoId={id} />
            </div>
        )
    }

}

export default TodoPage;
