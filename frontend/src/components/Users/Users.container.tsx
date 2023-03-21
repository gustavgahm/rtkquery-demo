import { usePrefetchUserQuery, useUsersQuery } from 'api/Users.api';
import { User } from 'models';
import React, { useCallback } from 'react';

import Component from './Users.component';
import Loading from './Users.loading';

const Container: React.FC = () => {
  const { data, isLoading } = useUsersQuery();
  const prefetchUsers = usePrefetchUserQuery();

  const handleUserHover = useCallback((user: User) => {
    prefetchUsers(user.id);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const props = {
    users: data ?? [],
    onUserHover: handleUserHover,
  };

  return <Component {...props} />;
};

export default Container;
