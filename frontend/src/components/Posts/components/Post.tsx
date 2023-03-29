import { Divider, Stack as MuiStack, styled, Typography } from '@mui/material';
import * as Models from 'models';
import React from 'react';
import { stringToColor } from 'utilities/Avatar';

const Stack = styled(MuiStack)({});

Stack.defaultProps = {
  direction: 'column',
  spacing: 1,
};

const Title = styled(Typography)({
  fontWeight: 'bold',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

Title.defaultProps = {
  flex: 1,
  variant: 'subtitle1',
};

const titleStyles = (title: string) => ({
  paddingLeft: '1rem',
  borderLeft: '5px solid',
  borderLeftColor: stringToColor(title),
});

const Timestamp = styled(Typography)();

Timestamp.defaultProps = {
  variant: 'caption',
};

const Body = styled(Typography)();

Body.defaultProps = {
  variant: 'body1',
};

export const Post: React.FC<Models.Post> = React.memo((props) => {
  return (
    <>
      <Stack sx={{ ...titleStyles(props.title) }}>
        <Stack direction='row'>
          <Title>{props.title}</Title>
          <Timestamp>{props.timestamp}</Timestamp>
        </Stack>
        <Body>{props.body}</Body>
      </Stack>
      <Divider sx={({ spacing }) => ({ margin: spacing(2) })} />
    </>
  );
});
