import Link from 'next/link';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    todoEdit: {
        marginTop: '55px',
        padding: '10px 25px',

        '& > div': {
            paddingBottom: '10px',
            width: '100%'
        }
    },

    todoEditCheck: {
        paddingBottom: '10px',
        paddingLeft: '5px',
        width: '100%'
    },

    todoEditControls: {
        marginTop: '10px',
        width: '100%',

        '& button': {
            margin: '0 10px'
        }
    }
};

const TodoForm = ({todo, classes, onInputChange, onSubmit}) => {

    let dueDate = moment(todo.dueDate).format('YYYY-MM-DD');

    return (
        <form className={classes.todoEdit} onSubmit={onSubmit}>
            <TextField
                label="Title"
                name="title"
                margin="normal"
                onChange={onInputChange}
                value={todo.title}
            />
            <FormControlLabel
                className={classes.todoEditCheck}
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
            <div className={classes.todoEditControls}>
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
};

export default withStyles(styles)(TodoForm);

