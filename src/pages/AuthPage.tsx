import {ReactElement} from 'react';
import {Box, Card, CardActionArea, CardMedia} from '@mui/material';
import {SignupForm} from '../components/SignupForm';

export function AuthPage(): ReactElement {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundImage: 'url(imgs/auth-background.jpg)',
        backgroundSize: 'cover',
        backgroundPositionY: '80%',
        backgroundRepeat: 'no-repeat',
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Card sx={{display: 'flex', paddingLeft: '25px', gap: '10px', width: '750px'}}>
          <CardMedia
            image='imgs/polus_logo.jpg'
            sx={{
              width: '350px',
              height: '350px',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              flexBasis: '50%',
            }}
            title='Polus logistics logo'
          />
          <CardActionArea sx={{flexBasis: '50%'}}>
            <SignupForm></SignupForm>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
