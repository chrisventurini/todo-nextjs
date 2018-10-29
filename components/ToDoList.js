import List from '@material-ui/core/List';
import ToDoItem from './ToDoItem';

export default () => {
    return (
        <List id="to-do-list">
            <ToDoItem title="Testing 123" />
        </List>
    )
}
