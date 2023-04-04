import { User } from 'models';
import React, { useCallback } from 'react';

import Component from './Users.component';
import { useUsersQuery } from 'api/Users.api';

const Container: React.FC = () => {
  
  const { data, isLoading } = useUsersQuery();

  const handleUserHover = useCallback((user: User) => {}, []);

  const props = {
    users: data ?? [],
    isLoading,
    onUserHover: handleUserHover,
  };

  return <Component {...props} />;
};

export default Container;
