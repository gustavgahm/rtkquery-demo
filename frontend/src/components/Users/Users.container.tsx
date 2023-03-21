import { User } from 'models';
import React, { useCallback } from 'react';

import Component from './Users.component';
import Loading from './Users.loading';

const Container: React.FC = () => {

  const isLoading = false;

 const handleUserHover = useCallback((user: User) => {
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const props = {
    users: [],
    onUserHover: handleUserHover,
  };

  return <Component {...props} />;
};

export default Container;
