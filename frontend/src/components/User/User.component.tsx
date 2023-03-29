import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Stack as MuiStack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { curry } from 'lodash/fp';
import { fullName, User } from 'models';
import React, { ChangeEvent } from 'react';
import { stringAvatar } from 'utilities/Avatar';

interface Data {
  user: User | null;
  isLoading: boolean;
}

interface Callbacks {
  onFormSubmit: () => void;
  onFormChange: (key: keyof User, value: string) => void;
}

type Props = Data & Callbacks;

const Stack = styled(MuiStack)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  minWidth: '25rem',
  overflow: 'auto',
}));

Stack.defaultProps = {
  spacing: 2,
};

const TextFieldSkeleton = () => (
  <Skeleton variant='rectangular' width='100%'>
    <TextField />
  </Skeleton>
);

const form = [
  { label: 'First Name', key: 'firstName' as keyof User },
  { label: 'Last Name', key: 'lastName' as keyof User },
  { label: 'Email', key: 'email' as keyof User },
];

const Component: React.FC<Props> = (props) => {
  const { user, isLoading } = props;

  const handleFormChange = curry(
    (key: keyof User, event: ChangeEvent<HTMLInputElement>) =>
      props.onFormChange(key, event.target.value)
  );

  return (
    <Stack justifyContent='center'>
      <Box>
        <Stack direction='row'>
          {isLoading ? (
            <Skeleton variant='circular'>
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar {...stringAvatar(fullName(user))} />
          )}
          <Typography variant='h4' sx={{ width: '80%' }}>
            {isLoading ? <Skeleton /> : fullName(user)}
          </Typography>
        </Stack>
      </Box>

      {form.map(({ label, key }) =>
        isLoading ? (
          <TextFieldSkeleton key={key} />
        ) : (
          <TextField
            key={key}
            label={label}
            value={user?.[key]}
            onChange={handleFormChange(key)}
          />
        )
      )}
      <Box>
        {isLoading ? (
          <Skeleton width='5rem' height='5rem' />
        ) : (
          <Button onClick={props.onFormSubmit}>Save</Button>
        )}
      </Box>
    </Stack>
  );
};

export default React.memo(Component);
