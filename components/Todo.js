import Link from 'next/link';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';


export default ({todo, onInputChange, onSubmit}) => {

    let dueDate = moment(todo.dueDate).format('YYYY-MM-DD');

    return (
        <form id="todo-edit" onSubmit={onSubmit}>
            <TextField
                label="Title"
                name="title"
                margin="normal"
                onChange={onInputChange}
                value={todo.title}
            />
            <FormControlLabel
                id="todo-edit-check"
                control={
                    <Checkbox
                        name="completed"
                        onChange={onInputChange}
                        checked={todo.completed}
                        color="primary"
                    />
                }
                label="Completed"
            />
            <TextField
                id="due-date"
                label="Due Date"
                type="date"
                name="dueDate"
                onChange={onInputChange}
                value={dueDate}
            />
            <TextField
                id="notes"
                label="Notes"
                name="notes"
                onChange={onInputChange}
                value={todo.notes}
            />
            <div id="todo-edit-controls">
                <Button type="submit" variant="contained" color="primary">
                   Save
                </Button>
                <Link href="/">
                    <Button variant="contained" color="secondary">
                        Cancel
                    </Button>
                </Link>
            </div>
        </form>
    )
}

