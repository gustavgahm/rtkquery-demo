import { Box, Skeleton, Stack as MuiStack, styled } from '@mui/material';
import { isEmpty, range } from 'lodash';
import * as Models from 'models';
import React, { useCallback } from 'react';

import { User } from './components/User';
import { UserSkeleton } from './components/UserSkeleton';

interface Data {
  users: Models.User[];
  isLoading: boolean;
}

interface Callbacks {
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

const rowHeight = 50;

const Component: React.FC<Props> = (props) => {
  const stackRef = React.useRef<HTMLDivElement>();
  const { users, isLoading } = props;

  const onUserHover = useCallback(
    (user: Models.User) => () => {
    },
    []
  );

  const containerHeight = stackRef.current?.clientHeight ?? rowHeight * 10;

  return (
    <Stack ref={stackRef}>
      {isLoading &&
        range(containerHeight / rowHeight).map((i) => (
          <div>
            <Skeleton variant='rectangular' height={rowHeight} />
          </div>
        ))}

      {users.map((user) => (
        <User key={user.id} user={user} onMouseEnter={onUserHover(user)} />
      ))}
    </Stack>
  );
};

export default React.memo(Component);
