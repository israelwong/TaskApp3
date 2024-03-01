import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import UserForm from './component/UserForm'
import UserList from './component/UserList'


function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (

    <Box sx={{ flexGrow: 1 }}>

      <Typography variant="h1">
        Todo List
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>

          <Typography variant="h5">
            Agregar usuario
          </Typography>
          <UserForm />

        </Grid>
        <Grid item xs={6}>

          <Typography variant="h5">
            Lista de usuarios
          </Typography>
          <UserList />

        </Grid>
      </Grid>
    </Box>

  )
}

export default App
