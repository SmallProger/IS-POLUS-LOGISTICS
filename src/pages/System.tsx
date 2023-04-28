import {ReactElement} from 'react';
import {NavigationBar} from '../components/NavigationBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';

export function System(): ReactElement {
  return (
    <>
      <AppBar position='static' sx={{background: 'var(--cod-gray)'}}>
        <Toolbar sx={{display: 'flex', gap: '20px'}}>
          <NavigationBar />
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
            Полюс Логистика
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          padding: '25px',
          backgroundColor: 'var(--cod-gray2)',
          minHeight: 'calc(100vh - 64px)',
          boxSizing: 'border-box',
        }}>
        <Outlet />
      </Box>
    </>
  );
}
