import React from 'react';

import Component from './Posts.component';

const Container: React.FC = () => {

  const props = {
    posts: [],
  };

  return <Component {...props} />;
};

export default Container;
