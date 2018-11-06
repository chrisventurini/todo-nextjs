import { connect } from 'react-redux'

import Header from '../components/Header'
import TodoList from '../components/TodoList'

import '../styles.scss';

function Index() {
    return (
        <div>
            <Header/>
            <TodoList/>
        </div>
    )
}

export default connect()(Index)
