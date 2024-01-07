import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

const pages = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Tickets', path: '/tickets' },
  { label: 'Logout', path: '/logout' },
];
export const Header = () => {
  const navigate = useNavigate();

      const logOut = ()=>{
        navigate('/login');
      }
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
              TMS
            </Typography>
            <Stack direction='row' spacing={2}>
              <Link style={{ color: '#FFF' }} to='/dashboard'>
              <Button color='inherit'>Dashboard</Button>
              </Link>
              <Link style={{ color: '#FFF' }} to='/ticketlist'>
              <Button color='inherit'>Tickets</Button>
              </Link>
              <Button onClick={logOut} color='inherit'>Logout</Button>

            </Stack>
          </Toolbar>
    </AppBar>
  )
}
