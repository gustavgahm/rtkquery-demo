import { usePrefetchUserQuery, useUsersQuery } from 'api/Users.api';
import { User } from 'models';
import React, { useCallback } from 'react';

import Component from './Users.component';

const Container: React.FC = () => {
  const { data, isLoading } = useUsersQuery();
  const prefetchUsers = usePrefetchUserQuery();

  const handleUserHover = useCallback((user: User) => {
    prefetchUsers(user.id);
  }, []);

  const props = {
    users: data ?? [],
    isLoading,
    onUserHover: handleUserHover,
  };

  return <Component {...props} />;
};

export default Container;
