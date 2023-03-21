import { Collapse, Stack as MuiStack, styled } from '@mui/material';
import { Post } from 'models';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import { PostRow } from './components/PostRow';

interface Data {
  posts: Post[];
}

type Props = Data;

const Stack = styled(MuiStack)({
  height: '100%',
  width: '40rem',
  overflow: 'auto',
  padding: '1rem',
});

const Component: React.FC<Props> = ({ posts }) => {
  return (
    <Stack>
      <TransitionGroup>
        {posts.map((post) => (
          <Collapse key={post.id} timeout={1000}>
            <PostRow post={post} />
          </Collapse>
        ))}
      </TransitionGroup>
    </Stack>
  );
};

export default React.memo(Component);
