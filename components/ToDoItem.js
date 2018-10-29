import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default (props) => {
    let { title } = props;

    return (
        <ListItem>
            <Checkbox tabIndex={-1} disableRipple />
            <ListItemText primary={title} />
        </ListItem>
    )
}