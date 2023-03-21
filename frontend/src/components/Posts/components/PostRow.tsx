import { Divider, Stack as MuiStack, styled, Typography } from '@mui/material';
import { Post } from 'models';
import React from 'react';
import { stringToColor } from 'utilities/Avatar';

interface PostRowProps {
  post: Post;
}

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

export const PostRow: React.FC<PostRowProps> = React.memo(({ post }) => {
  return (
    <>
      <Stack sx={{ ...titleStyles(post.title) }}>
        <Stack direction='row'>
          <Title>{post.title}</Title>
          <Timestamp>{post.timestamp}</Timestamp>
        </Stack>
        <Body>{post.body}</Body>
      </Stack>
      <Divider sx={({ spacing }) => ({ margin: spacing(2) })} />
    </>
  );
});
