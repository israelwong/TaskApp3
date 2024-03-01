import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UserForm() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="filled-basic" label="Username" variant="outlined" />

            <Stack spacing={2} direction="row">
                <Button variant="contained">Agregar</Button>
            </Stack>

        </Box>
    )
}

export default UserForm
