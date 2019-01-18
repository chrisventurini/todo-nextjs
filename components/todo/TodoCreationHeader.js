import moment from 'moment';
import propTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
    button: {
        color: 'black',
        backgroundColor: 'white',
        marginLeft: '20px',

        '&:disabled': {
            opacity: '0.6'
        }
    },
    fieldSet: {
        all: 'unset',

        '&:disabled *': {
            opacity: '0.6'
        }
    },
    form: {
        flexGrow: 1,
    },

    dateInput: {
        color: 'white',
        marginLeft: '20px',

        '& *': {
            color: 'white'
        }
    },
    todoInput: {
        color: 'white',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        width: '300px'
    }
});

const TodoCreationHeader = ({asyncCallsInProgress, todo, classes, onSubmit, onInputChange}) => {

    let dueDate = moment(todo.dueDate).format('YYYY-MM-DD');

    return (
        <AppBar>
            <Toolbar>
                <form noValidate autoComplete="off" onSubmit={onSubmit}>
                    <fieldset className={classes.fieldSet} disabled={asyncCallsInProgress}>
                        <InputBase
                            id="to-do-input"
                            className={classes.todoInput}
                            placeholder="Title"
                            name="title"
                            value={todo.title}
                            variant="outlined"
                            onChange={onInputChange}
                        />
                        <TextField
                            id="due-date"
                            className={classes.dateInput}
                            label="Due Date"
                            name="dueDate"
                            value={dueDate}
                            type="date"
                            onChange={onInputChange}
                        />
                        <Button
                            className={classes.button}
                            disabled={todo.title ? false : true}
                            type='submit'
                            className={classes.button}>
                            Create Todo
                        </Button>
                    </fieldset>
                </form>
            </Toolbar>
        </AppBar>
    )
};

TodoCreationHeader.propTypes = {
    asyncCallsInProgress: propTypes.bool.isRequired
};

export default withStyles(styles)(TodoCreationHeader);

