import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    listItem: {
        borderTop: '1px solid black'
    }
});


let TodoItem = (props) => {
    let { classes, title } = props;

    return (
        <ListItem className={classes.listItem}>
            <Checkbox tabIndex={-1} disableRipple />
            <ListItemText primary={title} />
        </ListItem>
    )
};

export default withStyles(styles())(TodoItem);