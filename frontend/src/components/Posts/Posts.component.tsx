import { Collapse, Stack as MuiStack, styled } from '@mui/material';
import * as Models from 'models';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import { Post } from './components/Post';

interface Data {
  posts: Models.Post[];
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
            <Post {...post} />
          </Collapse>
        ))}
      </TransitionGroup>
    </Stack>
  );
};

export default React.memo(Component);
