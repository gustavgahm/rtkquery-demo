import PostsIcon from '@mui/icons-material/Article';
import UsersIcon from '@mui/icons-material/Group';
import {
  AppBar,
  Button as MuiButton,
  LinearProgress,
  Stack,
  styled,
  Toolbar as MuiToolbar,
} from '@mui/material';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import { useSelector } from 'react-redux';

import { Link } from './Link';

const Button = styled(MuiButton)(({ theme }) => ({
  color: 'white',
}));

export const Toolbar = () => {
  const isLoading = useSelector((state: any) => {
    return Object.values(state.api.queries).some((query: any) => {
      return query && query.status === QueryStatus.pending;
    });
  });

  const loadingStyles = !isLoading ? { visibility: 'hidden' } : null;

  return (
    <>
      <AppBar
        position='static'
        sx={{ paddingLeft: '5rem', background: '#001c37' }}
      >
        <MuiToolbar disableGutters>
          <Stack
            direction='row'
            spacing={2}
            sx={{
              '.active': {
                borderBottom: '3px solid white',
              },
            }}
          >
            <Link to='/users'>
              <Button variant='text' startIcon={<UsersIcon />}>
                Users
              </Button>
            </Link>
            <Link to='/posts'>
              <Button startIcon={<PostsIcon />}>Posts</Button>
            </Link>
          </Stack>
        </MuiToolbar>
      </AppBar>
      <LinearProgress color='warning' sx={loadingStyles} />
    </>
  );
};
