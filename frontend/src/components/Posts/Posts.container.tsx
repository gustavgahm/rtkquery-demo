import { usePostsQuery } from 'api/Posts.api';
import React from 'react';

import Component from './Posts.component';

const Container: React.FC = () => {
  const { data } = usePostsQuery();

  const props = {
    posts: data ?? [],
  };

  return <Component {...props} />;
};

export default Container;
