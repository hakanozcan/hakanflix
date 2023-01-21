import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  container: {
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 2px',
    transform: 'scale(1.8)',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'transparent !important',
      textDecoration: 'none',
    },
  },
  pageNumber: {
    margin: '10px 30px !important',
    color: theme.palette.text.primary,
  },
}));
