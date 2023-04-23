import {ReactElement} from 'react';
import {useFormik} from 'formik';
import {TextField} from '@mui/material';
import {Box} from '@mui/material';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const FORM_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '18px',
  height: '100%',
};

export function SignupForm(): ReactElement {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/');
    },
  });
  return (
    <Box sx={FORM_STYLE} component='form' onSubmit={formik.handleSubmit} autoComplete='off'>
      <TextField value={formik.values.login} label='Login' id='login' name='login' onChange={formik.handleChange} />
      <TextField
        value={formik.values.password}
        type='password'
        label='Password'
        id='password'
        name='password'
        onChange={formik.handleChange}
      />
      <Button variant='contained' type='submit' size='large' sx={{marginTop: '10px'}}>
        Submit
      </Button>
    </Box>
  );
}
