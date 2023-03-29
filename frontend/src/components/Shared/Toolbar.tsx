import PostsIcon from '@mui/icons-material/Article';
import UsersIcon from '@mui/icons-material/Group';
import {
  AppBar,
  Button as MuiButton,
  Stack,
  styled,
  Toolbar as MuiToolbar,
} from '@mui/material';

import { Link } from './Link';

const Button = styled(MuiButton)(({ theme }) => ({
  color: 'white',
}));

export const Toolbar = () => (
  <AppBar position='static' sx={{ paddingLeft: '5rem' }}>
    <MuiToolbar disableGutters>
      <Stack direction='row' spacing={2}>
        <Link to='/users'>
          <Button startIcon={<UsersIcon />}>Users</Button>
        </Link>
        <Link to='/posts'>
          <Button startIcon={<PostsIcon />}>Posts</Button>
        </Link>
      </Stack>
    </MuiToolbar>
  </AppBar>
);
