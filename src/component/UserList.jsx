import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function UserList() {
    return (
        <div>

            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItemButton>


        </div>
    )
}

export default UserList
