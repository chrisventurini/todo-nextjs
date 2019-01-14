import Link from 'next/link';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    todoFieldSet: {
        all: 'unset',

        '&:disabled *': {
            opacity: '0.6'
        }
    },
    todoEdit: {
        marginTop: '55px',
        padding: '10px 25px',
    },

    todoInputs: {
        paddingBottom: '10px',
        width: '100%'
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

const TodoForm = ({ asyncCallsInProgress, todo, classes, onDelete, onInputChange, onSubmit}) => {

    let dueDate = moment(todo.dueDate).format('YYYY-MM-DD');

    return (
        <form className={classes.todoEdit} onSubmit={onSubmit}>
            <fieldset className={classes.todoFieldSet} disabled={asyncCallsInProgress}>
                <TextField
                    className={classes.todoInputs}
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
                    className={classes.todoInputs}
                    id="due-date"
                    label="Due Date"
                    type="date"
                    name="dueDate"
                    onChange={onInputChange}
                    value={dueDate}
                />
                <TextField
                    className={classes.todoInputs}
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
                    <Button onClick={onDelete} variant="contained" color="secondary">
                        X Delete
                    </Button>
                    <Link href="/">
                        <Button variant="contained" color="secondary">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </fieldset>
        </form>
    )
};

TodoForm.propTypes = {
    asyncCallsInProgress: PropTypes.bool.required,
    onDelete: PropTypes.func.required
};

export default withStyles(styles)(TodoForm);

