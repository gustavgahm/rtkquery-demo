import { Avatar, Stack as MuiStack, styled, Typography } from '@mui/material';
import { Link } from 'components/Shared';
import * as Models from 'models';
import { fullName } from 'models/User';
import React from 'react';
import { stringAvatar } from 'utilities/Avatar';

interface UserProps {
  user: Models.User | null;
  onMouseEnter: () => void;
}
const Stack = styled(MuiStack)({
  cursor: 'pointer',
  ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
});

Stack.defaultProps = {
  direction: 'row',
  alignItems: 'center',
};

export const User: React.FC<UserProps> = React.memo(
  ({ user, onMouseEnter }) => {
    return (
      <Link to={`/users/${user?.id}`} onMouseEnter={onMouseEnter}>
        <Stack spacing={1}>
          {user && <Avatar {...stringAvatar(fullName(user))} />}
          <MuiStack spacing={0}>
            <Typography variant='h6'>{fullName(user)}</Typography>
            <Typography variant='caption'>{user?.email}</Typography>
          </MuiStack>
        </Stack>
      </Link>
    );
  }
);
