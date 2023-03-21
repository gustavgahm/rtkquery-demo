import { Stack as MuiStack, styled } from '@mui/material';
import { User } from 'models';
import React, { useCallback } from 'react';

import { UserRow } from './components/UserRow';

interface Data {
  users: User[];
}

interface Callbacks {
  onUserHover: (user: User) => void;
}

type Props = Data & Callbacks;

const Stack = styled(MuiStack)({
  height: '100%',
  width: '20rem',
  overflow: 'auto',
  padding: '1rem',
});

Stack.defaultProps = {
  spacing: 2,
};

const Component: React.FC<Props> = (props) => {
  const { users } = props;
  const onUserHover = useCallback(
    (user: User) => () => {
      props.onUserHover(user);
    },
    []
  );

  return (
    <Stack>
      {users.map((user) => (
        <UserRow onMouseEnter={onUserHover(user)} key={user.id} user={user} />
      ))}
    </Stack>
  );
};

export default React.memo(Component);
