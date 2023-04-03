import React from 'react';

import Component from './Users.component';

const Container: React.FC = () => {

  const props = {
    users: [],
    isLoading: true,
  };

  return <Component {...props} />;
};

export default Container;
