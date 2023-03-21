import { Avatar, Stack as MuiStack, styled, Typography } from '@mui/material';
import { Link } from 'components/Shared';
import { fullName, User } from 'models';
import React from 'react';
import { stringAvatar } from 'utilities/Avatar';

interface UserRowProps {
  user: User | null;
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

export const UserRow: React.FC<UserRowProps> = React.memo(
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
