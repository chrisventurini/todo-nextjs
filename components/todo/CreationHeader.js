import moment from 'moment';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
    form: {
        flexGrow: 1,
    },
    dateInput: {
        color: 'white',
        marginLeft: '20px'
    },
    todoInput: {
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

const CreationHeader = ({todo, classes, onSubmit, onInputChange}) => {

    let dueDate = moment(todo.dueDate).format('YYYY-MM-DD');

    return (
        <AppBar id="header">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
                            disabled={todo.title ? false : true}
                            type='submit'
                            className={classes.button}>
                            Create Todo
                        </Button>
                    </form>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default withStyles(styles)(CreationHeader);

