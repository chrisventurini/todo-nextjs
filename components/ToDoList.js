import { Component } from 'react';
import { connect } from 'react-redux'

import List from '@material-ui/core/List';

import ToDoItem from './ToDoItem';

class ToDoList extends Component {

    render () {

        let toDos = this.props.toDos.map((toDo) => {
           return (<ToDoItem title={ toDo.title } />)
        });

        return (
            <List id="to-do-list">
                {toDos}
            </List>
        )
    }

}

export default connect(state => {
    return {
        toDos: state.toDos
    }
})(ToDoList)