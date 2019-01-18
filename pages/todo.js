import { Component } from 'react';

import EditHeader from '../components/common/BasicNavHeader'
import Loader from '../components/async/Loader'
import TodoFormContainer from '../components/todo/TodoFormContainer';
import fetch from "isomorphic-unfetch";



class TodoPage extends Component {

    static async getInitialProps (context) {
        let { id } = context.query;

        if(process.browser) {
            return { id };
        }

        let uri = `http://localhost:3000/api/todos/${id}`,

            response = await fetch(uri),

            todo = await response.json();

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
