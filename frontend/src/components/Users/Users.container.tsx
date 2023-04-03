import { User } from 'models';
import React, { useCallback } from 'react';

import Component from './Users.component';

const Container: React.FC = () => {

  const handleUserHover = useCallback((user: User) => {
  }, []);

  const props = {
    users: [],
    isLoading: true,
    onUserHover: handleUserHover,
  };

  return <Component {...props} />;
};

export default Container;
