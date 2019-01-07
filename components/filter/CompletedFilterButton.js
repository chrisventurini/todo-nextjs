import Chip from '@material-ui/core/Chip';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';



export default ({enabled, onClick}) => {

    let icon = enabled ? (<RadioButtonChecked />) : (<RadioButtonUnchecked/>);

    return (
            <Chip
                icon={icon}
                label="Filter Completed"
                clickable
                onClick={onClick}
                color="primary"
            />
    )

}

