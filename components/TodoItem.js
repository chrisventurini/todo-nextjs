import Link from 'next/link'

import moment from 'moment';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    listItem: {
        borderTop: '1px solid black'
    }
});


let TodoItem = (props) => {
    let { dueDate, classes, title } = props;

    return (
        <ListItem className={classes.listItem}>
            <Checkbox tabIndex={-1} disableRipple />
            <Link href="/todo">
                <a>
                    <ListItemText primary={title} secondary={`Due: ${ moment(dueDate).format('MM/DD/YYYY') }`} />
                </a>
            </Link>
        </ListItem>
    )
};

export default withStyles(styles())(TodoItem);